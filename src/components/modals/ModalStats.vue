<template>
  <div class="stats-modal">
    <h2>Statistics</h2>
    <div class="stats">
      <div>
        <p class="stat-number">{{ gamesPlayed }}</p>
        <p class="stat-description">Played</p>
      </div>
      <div>
        <p class="stat-number">
          {{
            Math.round(((gamesPlayed - store.scores[6]) / gamesPlayed) * 100) ||
            0
          }}
        </p>
        <p class="stat-description">Win %</p>
      </div>
      <div>
        <p class="stat-number">{{ store.currentStreak }}</p>
        <p class="stat-description">
          Current<br />
          Streak
        </p>
      </div>
      <div>
        <p class="stat-number">{{ store.maxStreak }}</p>
        <p class="stat-description">
          Max<br />
          Streak
        </p>
      </div>
    </div>
    <h2 class="distribution-header">Guess Distribution</h2>
    <div
      v-for="(win, i) in store.scores.slice(0, -1)"
      :key="i"
      class="win-bar-row"
    >
      <span>{{ i + 1 }}</span>
      <span
        class="win-bar"
        :style="{
          width: `calc(${
            (win / Math.max(...store.scores.slice(0, -1))) * 100
          }% + 10px)`,
        }"
        >{{ win }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "@/composables/game";
import { computed } from "vue";

const { store } = useGameStore();

const gamesPlayed = computed(() =>
  store.scores.reduce((sum, score) => sum + score, 0)
);
</script>

<style scoped>
p {
  margin: 0;
}

.stats-modal {
  text-align: center;
  padding-bottom: 20px;
}

.stats {
  display: flex;
  justify-content: space-evenly;
  width: 300px;
  margin: 10px auto 20px;
}

.stat-number {
  font-weight: 600;
  font-size: 2em;
}
.stat-description {
  font-size: 0.7em;
}

.distribution-header {
  margin: 30px auto 20px;
}

.win-bar-row {
  display: flex;
  width: 300px;
  margin: 3px auto;
}

.win-bar {
  margin-left: 10px;
  background-color: var(--color-correct);
  color: var(--tile-text-color);
  text-align: right;
  padding: 2px 10px;
}
</style>
