<template>
  <button
    class="keyboard-key wide"
    @click="handleBackspace"
    aria-label="backspace"
  >
    <BackspaceIcon class="icon" />
  </button>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";
import { BackspaceIcon } from "@heroicons/vue/outline";

const { handleBackspace } = useGameStore();
</script>

<style scoped>
.icon {
  color: var(--key-text-1);
}
</style>
