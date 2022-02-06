<template>
  <button @click="handleDeblur">
    <slot />
  </button>
</template>

<script setup lang="ts">
// I had to set up this button becuase
// header buttons stay active after click

// dark mode was toggling after click

function handleDeblur(e: MouseEvent) {
  (e.currentTarget as HTMLButtonElement).blur();
}
</script>
