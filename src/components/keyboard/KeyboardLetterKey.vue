<template>
  <button
    class="keyboard-key"
    :class="letterState"
    :aria-label="letter"
    @click="handleAddLetter(letter)"
  >
    <p>{{ letter }}</p>
  </button>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";

const props = defineProps<{ letter: string }>();

const { getLetterState, handleAddLetter } = useGameStore();
const letterState = getLetterState(props.letter);
</script>
