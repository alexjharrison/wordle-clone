import { isValidWord, pickRandomWord } from "@/lib/words";
import { computed, reactive, type ComputedRef } from "vue";
import { useEventListener } from "@vueuse/core";
import {
  allOverlappingLetters,
  isLetterAtCorrectIndexOnAnyGuess,
  nonOverlappingLetters,
} from "@/lib/check";
import { useToast } from "./toast";

/////////////////////
// Type Definitions
/////////////////////

enum GameState {
  ACCEPTING_LETTER,
  WORD_COMPLETE,
  GAME_WON,
  GAME_LOST,
}

export type LetterState = "correct" | "absent" | "present" | "unplayed";

interface GameStore {
  state: GameState;
  round: number;
  guesses: string[];
  answer: string;
}

//////////////////
// Global State
//////////////////

const NUM_ROUNDS = 6;

const store: GameStore = reactive({
  state: GameState.ACCEPTING_LETTER,
  round: 0,
  guesses: [""],
  answer: pickRandomWord().toUpperCase(),
});

/////////////////////////
// Handle KeyPress events
/////////////////////////

useEventListener(document, "keydown", (e) => {
  // Word Chosen
  if (e.code === "Enter") {
    handleEnter();
  }

  // Backspace
  // Delete last letter from current guess
  else if (e.code === "Backspace") {
    handleBackspace();
  }

  // Letter Selected
  else if (e.code.startsWith("Key")) {
    handleAddLetter(e.code.slice(-1));
  }
});

////////////////////////////
// State Modifier Functions
////////////////////////////

const { fireToast } = useToast();

function handleEnter(): void {
  if (store.state === GameState.WORD_COMPLETE) {
    if (!isValidWord(store.guesses[store.round])) {
      fireToast("Not a Word ☹");
      return;
    }

    store.guesses.push("");
    if (store.guesses[store.round] === store.answer) {
      store.state = GameState.GAME_WON;
      return;
    }

    store.round++;
    store.state =
      store.round === NUM_ROUNDS
        ? GameState.GAME_LOST
        : GameState.ACCEPTING_LETTER;
  }
}

function handleBackspace(): void {
  if (
    store.state === GameState.ACCEPTING_LETTER ||
    store.state === GameState.WORD_COMPLETE
  ) {
    store.guesses[store.round] = store.guesses[store.round].slice(0, -1);
    store.state = GameState.ACCEPTING_LETTER;
  }
}

function handleAddLetter(letter: string): void {
  if (store.state === GameState.ACCEPTING_LETTER) {
    store.guesses[store.round] += letter;

    if (store.guesses[store.round].length === 5) {
      store.state = GameState.WORD_COMPLETE;
    }
  }
}

function startNewGame(): void {
  Object.assign(store, {
    state: GameState.ACCEPTING_LETTER,
    round: 0,
    guesses: [""],
    answer: pickRandomWord().toUpperCase(),
  });
}

///////////////////
// Computed Values
///////////////////

const isGameOver = computed(
  () =>
    store.state === GameState.GAME_LOST || store.state === GameState.GAME_WON
);

const lockedInGuesses = computed(() => store.guesses.slice(0, -1));

const correctLetters = computed(() =>
  allOverlappingLetters(store.answer, lockedInGuesses.value.join(""))
);

const incorrectLetters = computed(() =>
  nonOverlappingLetters(store.answer, lockedInGuesses.value.join(""))
);

const getLetterState = (
  letter: string,
  index?: number,
  row?: number
): ComputedRef<LetterState> =>
  computed(() => {
    // keyboard
    if (
      index === undefined &&
      isLetterAtCorrectIndexOnAnyGuess(
        lockedInGuesses.value,
        letter,
        store.answer
      )
    ) {
      return "correct";
    }

    // guess box
    else if (row !== undefined && row >= store.round && !isGameOver.value) {
      return "unplayed";
    } else if (index !== undefined && store.answer[index] === letter) {
      return "correct";
    }

    // both
    else if (correctLetters.value.includes(letter)) {
      return "present";
    } else if (incorrectLetters.value.includes(letter)) {
      return "absent";
    } else return "unplayed";
  });

///////////////////////
// Composable Function
///////////////////////

export const useGameStore = () => ({
  store,
  NUM_ROUNDS,
  correctLetters,
  incorrectLetters,
  isGameOver,
  getLetterState,
  handleEnter,
  handleBackspace,
  handleAddLetter,
  startNewGame,
});
