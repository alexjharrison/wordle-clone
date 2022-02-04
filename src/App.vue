<template>
  <div @click="openModal('ModalGameRules')">test</div>
  <div>{{ store }}</div>
  <div>correctLetters: {{ correctLetters }}</div>
  <div>incorrectLetters: {{ incorrectLetters }}</div>
  <Modal />
</template>

<script setup lang="ts">
import Modal from "./components/modals/Modal.vue";
import { useGameStore } from "./composables/game";
import { useModal } from "./composables/modal";

const { store, correctLetters, incorrectLetters } = useGameStore();
const { openModal } = useModal();
</script>

<style>
@import "@/assets/vars.css";
@import "@/assets/base.css";
</style>
