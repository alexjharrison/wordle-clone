<template>
  <DeblurButton
    class="keyboard-key"
    :class="letterState"
    :aria-label="letter"
    @click="handleAddLetter(letter)"
  >
    <p>{{ letter }}</p>
  </DeblurButton>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";
import DeblurButton from "../generic/DeblurButton.vue";

const props = defineProps<{ letter: string }>();

const { getLetterState, handleAddLetter } = useGameStore();
const letterState = getLetterState(props.letter);
</script>
