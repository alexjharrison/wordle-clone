<template>
  <section class="keyboard">
    <div class="row" v-for="(row, i) in rows" :key="row">
      <KeyboardEnterKey v-if="i === 2" />
      <KeyboardLetterKey
        v-for="letter in row.split('')"
        :key="letter"
        :letter="letter"
      />
      <KeyboardBackspaceKey v-if="i === 2" />
    </div>
  </section>
</template>

<script setup lang="ts">
import KeyboardLetterKey from "./KeyboardLetterKey.vue";
import KeyboardEnterKey from "./KeyboardEnterKey.vue";
import KeyboardBackspaceKey from "./KeyboardBackspaceKey.vue";

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
</script>

<style scoped>
.keyboard {
  margin-bottom: 30px;
}
.row {
  display: flex;
  justify-content: center;
  align-items: stretch;
}
</style>

<style>
.keyboard-key {
  padding: 0.1rem 1rem;
  margin: 0.1rem;
  border-radius: 5px;
  background-color: var(--key-bg);
  color: var(--key-text-color);
}
.keyboard-key:hover {
  background-color: var(--color-absent);
  cursor: pointer;
}
</style>
