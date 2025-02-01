<template>
  <div class="timer-container">
    <h2>Timer: {{ people.formattedTime() }}</h2>

    <!-- <button @click="startTimer" :disabled="isRunning">Start</button> -->
    <!-- <button @click="pauseTimer" :disabled="!isRunning">Pause</button>
    <button @click="resetTimer">Reset</button> -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { usePeopleStore } from "../../store/people";

const people = usePeopleStore();

const secondsElapsed = ref(0);
const isRunning = ref(people.isRunningState);
let timerInterval = null;

// Computed property to format time as MM:SS
// const formattedTime = computed(() => {
//   const minutes = Math.floor(people.secondsElapsed / 60);
//   const seconds = people.secondsElapsed % 60;
//   return `${minutes}:${seconds.toString().padStart(2, "0")}`;
// });

console.log("timer", isRunning.value);

// watch(isRunning, (newValue, oldValue) => {
//   console.log(newValue);
//   people.toggleRunningState(newValue);
//   if (newValue === true) {
//     startTimer();
//   } else {
//     pauseTimer();
//   }
// });

const startTimer = () => {
  //   if (people.isRunningState) return;

  //   people.toggleRunningState(true);
  timerInterval = setInterval(() => {
    secondsElapsed.value++;
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(timerInterval);
  //   isRunning.value = false;
  //   people.toggleRunningState(false);
};

// const resetTimer = () => {
//   clearInterval(timerInterval);
//   secondsElapsed.value = 0;
//   isRunning.value = false;
// };
</script>

<style>
.timer-container {
  text-align: center;
  font-family: Arial, sans-serif;
}
button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
