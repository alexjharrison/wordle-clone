<template>
  <header>
    <div>
      <DeblurButton
        aria-label="game rules"
        @click="openModal('ModalGameRules')"
      >
        <InformationCircleIcon />
      </DeblurButton>
    </div>
    <h1 class="title">WERDLE</h1>
    <div>
      <DeblurButton aria-label="game stats" @click="openModal('ModalStats')">
        <ChartBarIcon />
      </DeblurButton>
      <DeblurButton aria-label="dark mode" @click="toggleDarkMode">
        <MoonIcon />
      </DeblurButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useModal } from "@/composables/modal";
import {
  MoonIcon,
  InformationCircleIcon,
  ChartBarIcon,
} from "@heroicons/vue/outline";
import DeblurButton from "./generic/DeblurButton.vue";

defineEmits<{ (e: "toggle-dark-mode"): void }>();

const { openModal } = useModal();

function toggleDarkMode(e: MouseEvent) {
  // vue root div
  const app = document.getElementById("app");

  // toggle nightmode class at vue root
  app?.classList.toggle("nightmode");
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
