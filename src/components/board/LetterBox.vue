<template>
  <div class="letter-box" ref="boxelement" :class="letterState">
    <p>{{ letter }}</p>
  </div>
</template>

<script setup lang="ts">
import type { LetterState } from "@/composables/game";
import { useElementSize } from "@vueuse/core";
import { ref, watchEffect } from "vue";

defineProps<{
  letter: string;
  letterState: LetterState;
}>();

const boxelement = ref<HTMLDivElement | null>(null);

const { width } = useElementSize(boxelement);

watchEffect(() => {
  if (boxelement.value) {
    boxelement.value.style.height = String(width.value) + "px" || "auto";
  }
});
</script>

<style>
.letter-box {
  background-color: var(--color-background);
  border: 2px solid var(--color-tone-4);
  width: 60px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-tone-1);
}
.letter-box.present {
  background-color: var(--key-bg-present);
  border: 2px solid var(--key-bg-present);
  color: var(--tile-text-color);
}
.letter-box.correct {
  background-color: var(--key-bg-correct);
  border: 2px solid var(--key-bg-correct);
  color: var(--tile-text-color);
}
.letter-box.absent {
  background-color: var(--key-bg-absent);
  border: 2px solid var(--key-bg-absent);
  color: var(--tile-text-color);
}

@keyframes squish {
  0% {
    background-color: red;
  }
  50% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0);
  }
}
</style>
