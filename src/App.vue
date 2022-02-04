<template>
  <div id="app-content">
    <AppHeader class="app-header" />
    <AppBody class="app-body" />
    <AppFooter class="app-footer" />
  </div>
  <Modal />
</template>

<script setup lang="ts">
import Modal from "./components/modals/Modal.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppBody from "@/components/AppBody.vue";
</script>

<style>
@import "@/assets/styles/vars.css";
@import "@/assets/styles/base.css";
</style>

<style scoped>
#app-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.app-body {
  margin: auto;
}

.app-header {
  border-bottom: solid 1px var(--color-tone-4);
  width: 400px;
}
</style>
