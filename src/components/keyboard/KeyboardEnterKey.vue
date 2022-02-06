<template>
  <button class="keyboard-key wide" @click="handleEnter" aria-label="enter">
    <p>Enter</p>
  </button>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";

const { handleEnter } = useGameStore();
</script>
