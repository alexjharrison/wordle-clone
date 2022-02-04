<template>
  <div class="letter-box" :class="letterState">
    <p>{{ letter }}</p>
  </div>
</template>

<script setup lang="ts">
import type { LetterState } from "@/composables/game";

defineProps<{
  letter: string;
  letterState: LetterState;
}>();
</script>

<style>
.letter-box {
  background-color: var(--color-background);
  border: 2px solid var(--color-tone-4);
  width: 50px;
  height: 50px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--key-text-color);
}
.letter-box.present {
  background-color: var(--key-bg-present);
  border: 2px solid var(--key-bg-present);
}
.letter-box.correct {
  background-color: var(--key-bg-correct);
  border: 2px solid var(--key-bg-correct);
}
.letter-box.absent {
  background-color: var(--key-bg-absent);
  border: 2px solid var(--key-bg-absent);
}

@keyframes squish {
  0% {
    background-color: red;
  }
  50% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0);
  }
}
</style>
