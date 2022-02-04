<template>
  <div class="keyboard-key">
    <p>Enter</p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";

const { NUM_ROUNDS } = useGameStore();
</script>
