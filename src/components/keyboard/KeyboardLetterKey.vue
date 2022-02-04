<template>
  <div
    class="keyboard-key"
    :class="letterState"
    @click="handleAddLetter(letter)"
  >
    <p>{{ letter }}</p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";

const props = defineProps<{ letter: string }>();

const { getLetterState, handleAddLetter } = useGameStore();
const letterState = getLetterState(props.letter);
</script>

<style scoped>
.keyboard-key.present {
  background-color: var(--key-bg-present);
}
.keyboard-key.correct {
  background-color: var(--key-bg-correct);
}
.keyboard-key.absent {
  background-color: var(--key-bg-absent);
}
</style>
