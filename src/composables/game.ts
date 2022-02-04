import { pickRandomWord } from "@/lib/words";
import { computed, reactive, type ComputedRef } from "vue";
import { useEventListener } from "@vueuse/core";
import { allOverlappingLetters, nonOverlappingLetters } from "@/lib/overlap";

/////////////////////
// Type Definitions
/////////////////////

enum GameState {
  ACCEPTING_LETTER,
  WORD_COMPLETE,
  GAME_WON,
  GAME_LOST,
}

enum LetterState {
  CORRECT,
  INCORRECT,
  UNPLAYED,
}

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
  answer: pickRandomWord(),
});

/////////////////////////
// Handle KeyPress events
/////////////////////////

useEventListener(document, "keydown", (e) => {
  console.log(e);

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

function handleEnter(): void {
  if (store.state === GameState.WORD_COMPLETE) {
    if (store.guesses[store.round] === store.answer.toUpperCase()) {
      store.state = GameState.GAME_WON;
      return;
    }

    store.round++;
    store.guesses.push("");
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
    answer: pickRandomWord(),
  });
}

///////////////////
// Computed Values
///////////////////

const correctLetters = computed(() =>
  allOverlappingLetters(store.answer, store.guesses.join(""))
);

const incorrectLetters = computed(() =>
  nonOverlappingLetters(store.answer, store.guesses.join(""))
);

const letterState = (letter: string): ComputedRef<LetterState> =>
  computed(() => {
    if (correctLetters.value.includes(letter)) {
      return LetterState.CORRECT;
    } else if (incorrectLetters.value.includes(letter)) {
      return LetterState.INCORRECT;
    } else {
      return LetterState.UNPLAYED;
    }
  });

///////////////////////
// Composable Function
///////////////////////

export const useGameStore = () => ({
  store,
  NUM_ROUNDS,
  correctLetters,
  incorrectLetters,
  letterState,
  handleEnter,
  handleBackspace,
  handleAddLetter,
  startNewGame,
});
