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
  margin-bottom: 10px;
}
.row {
  display: flex;
  justify-content: center;
  margin: 0 10px;
}
.keyboard-key {
  border-radius: 5px;
  background-color: var(--key-bg);
  color: var(--key-text-color);
  flex: 0 1 40px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
}
.keyboard-key.wide {
  padding: 0 10px;
}
.keyboard-key:hover {
  background-color: var(--color-absent);
  cursor: pointer;
}

.keyboard-key.present {
  background-color: var(--key-bg-present);
}
.keyboard-key.correct {
  background-color: var(--key-bg-correct);
}
.keyboard-key.absent {
  background-color: var(--key-bg-absent);
}
</style>
