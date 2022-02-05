<template>
  <div class="keyboard-key" @click="handleEnter">
    <p>Enter</p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";

const { handleEnter } = useGameStore();
</script>
