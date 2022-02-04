<template>
  <div>test</div>
  <div>{{ store }}</div>
  <div>correctLetters: {{ correctLetters }}</div>
  <div>incorrectLetters: {{ incorrectLetters }}</div>
</template>

<script setup lang="ts">
import { useGameStore } from "./composables/game";

const { store, correctLetters, incorrectLetters } = useGameStore();
</script>
