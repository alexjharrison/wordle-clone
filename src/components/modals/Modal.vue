<template>
  <div v-if="isShowing" class="mask" :class="{ showing: isShowing }">
    <div class="modal">
      <div class="close-btn" @click="closeModal">X</div>
      <component :is="modalBody" />
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useModal } from "@/composables/modal";
import { computed } from "vue";
import * as components from "./index";

const { isShowing, currentModal, closeModal } = useModal();

const modalBody = computed(() => components[currentModal.value]);
</script>

<style scoped>
.mask {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  background-color: rgba(255, 255, 255, 0.5);
}
.mask.showing {
  opacity: 1;
  transition: opacity 5s ease;
}
.modal {
  position: relative;
  padding: 0.5em;
  border: solid 1px #f8f8f8;
  width: 400px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 4px 23px 0 rgb(0 0 0 / 20%);
}
.close-btn {
  position: absolute;
  right: 1em;
  padding: 5px;
  border: 1px solid #ccc;
  color: #444;
  border-radius: 4px;
  cursor: pointer;
}
</style>
