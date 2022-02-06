<template>
  <transition name="fade">
    <div v-if="isShowing" class="mask">
      <div class="modal" ref="modal">
        <div class="close-btn" @click="closeModal">X</div>
        <component :is="modalBody" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useModal } from "@/composables/modal";
import { onClickOutside } from "@vueuse/core";
import { computed, ref } from "vue";
import * as components from "./index";

const { isShowing, currentModal, closeModal } = useModal();

const modal = ref<HTMLDivElement | null>(null);
onClickOutside(modal, closeModal);

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
  background-color: var(--opacity-80);
}

.modal {
  position: relative;
  padding: 0.5em;
  border: solid 1px #f8f8f8;
  width: 400px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 5px var(--color-tone-3);
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
