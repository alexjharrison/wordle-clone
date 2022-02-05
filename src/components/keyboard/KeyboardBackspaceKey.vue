<template>
  <div class="keyboard-key" @click="handleBackspace">
    <BackspaceIcon class="icon" />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";
import { BackspaceIcon } from "@heroicons/vue/outline";

const { handleBackspace } = useGameStore();
</script>

<style scoped>
.keyboard-key {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  color: var(--key-text-1);
}
</style>
