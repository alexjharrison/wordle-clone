<template>
  <header>
    <div>
      <button aria-label="game rules">
        <InformationCircleIcon />
      </button>
    </div>
    <h1 class="title">WERDLE</h1>
    <div>
      <button aria-label="game stats">
        <ChartBarIcon />
      </button>
      <button aria-label="dark mode" @click="toggleDarkMode">
        <MoonIcon />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  MoonIcon,
  InformationCircleIcon,
  ChartBarIcon,
} from "@heroicons/vue/outline";

defineEmits<{ (e: "toggle-dark-mode"): void }>();

function toggleDarkMode(e: MouseEvent) {
  // vue root div
  const app = document.getElementById("app");

  // toggle nightmode class at vue root
  app?.classList.toggle("nightmode");

  // blur button so enter does not trigger re-darkening
  (e.currentTarget as HTMLButtonElement).blur();
}
</script>

<style scoped>
header {
  display: flex;
  align-items: space-between;
  justify-content: center;
  text-align: center;
  height: var(--header-height);
}
header > * {
  flex: 1;
  margin: auto;
}
.title {
  font-weight: 600;
  letter-spacing: 0.1em;
}
button {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
button:hover {
  background-color: var(--color-tone-4);
}
button:active,
button:focus {
  border: 2px solid var(--color-tone-2);
}
</style>
