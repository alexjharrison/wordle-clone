<template>
  <div id="app-content">
    <AppHeader class="app-header" />
    <AppBody class="app-body" />
    <AppFooter class="app-footer" />
  </div>
  <Modal />
  <ToastNotification />
</template>

<script setup lang="ts">
import Modal from "./components/modals/Modal.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppBody from "@/components/AppBody.vue";
import ToastNotification from "./components/toast/ToastNotification.vue";
</script>

<style>
@import "@/assets/styles/vars.css";
@import "@/assets/styles/base.css";
@import "@/assets/styles/transitions.css";
</style>

<style scoped>
#app-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--game-max-width);
  margin: auto;
}
#app-content > * {
  width: 100%;
}
.app-body {
  margin: auto;
}

.app-header {
  border-bottom: solid 1px var(--color-tone-4);
}
</style>
