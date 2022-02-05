<template>
  <transition name="fade">
    <div class="toaster" v-if="isVisible">
      <h2 class="toaster-body">
        {{ message }}
        <span class="close-btn" @click="closeToast">X</span>
      </h2>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useToast } from "@/composables/toast";

const { closeToast, isVisible, message } = useToast();
</script>

<style scoped>
.toaster {
  position: fixed;
  top: calc(var(--header-height) + 30px);
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  color: var(--color-tone-1);
}
.toaster-body {
  position: relative;
  max-width: var(--game-max-width);
  border: 1px solid var(--color-tone-4);
  background-color: var(--opacity-50);
  border-radius: 5px;
  padding: 8px 40px 8px 15px;
  margin: 0;
}
.close-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  font-weight: 300;
  color: var(--color-tone-2);
}
</style>
