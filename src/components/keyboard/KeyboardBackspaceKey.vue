<template>
  <div class="keyboard-key" @click="handleBackspace">
    <p>&lt;=</p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";

const { handleBackspace } = useGameStore();
</script>
