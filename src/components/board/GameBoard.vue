<template>
  <div class="board">
    <div class="row" v-for="(row, i) in rows" :key="i">
      <LetterBox v-for="(square, j) in row" :key="j" v-bind="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore, type LetterState } from "@/composables/game";
import { computed } from "vue";
import LetterBox from "./LetterBox.vue";

const { store, getLetterState } = useGameStore();

const rows = computed<{ letter: string; letterState: LetterState }[][]>(() =>
  new Array(6).fill(null).map((_, row) =>
    new Array(5).fill(null).map((_, letterIdx) => {
      const letter = store.guesses[row]?.[letterIdx] || "";
      return {
        letter,
        letterState: getLetterState(letter, letterIdx, row).value,
      };
    })
  )
);
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  margin: auto 10px;
}
.row {
  display: flex;
  justify-content: center;
}
</style>
