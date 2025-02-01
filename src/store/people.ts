import { defineStore } from "pinia";
import { ref } from "vue";

// export const usePeopleStore = defineStore("people", () => {
//   const people = ref([]);

//   //   const name = ref("Eduardo");
//   //   const doubleCount = computed(() => people.value * 2);
//   function increment(values) {
//     // people.value.push(...values);
//     console.log(people.value.length);
//   }

//   return { people, increment };
// });

export const usePeopleStore = defineStore("counter", {
  state: () => ({
    people: [],
    isRunning: false,
    secondsElapsed: 0,
    timerInterval: null,
  }),
  getters: {
    returnPeopleList(state) {
      // state.people = state.people.sort((a, b) => b?.potatoes - a?.potatoes);
      return state.people;
    },
    isRunningState(state) {
      return state.isRunning;
    },
  },

  actions: {
    addPeopleList(payload) {
      this.people.push(...payload);

      // this.people.sort((a, b) => b?.potatoes - a?.potatoes);

      console.log(this.people);
    },
    setPeopleList(payload) {
      this.people = payload;
      // return state.people;
    },

    toggleRunningState(payload) {
      this.isRunning = payload;
    },

    startTimer() {
      this.timerInterval = setInterval(() => {
        this.secondsElapsed++;
      }, 1000);
    },

    pauseTimer() {
      clearInterval(this.timerInterval);
    },

    formattedTime() {
      const minutes = Math.floor(this.secondsElapsed / 60);
      const seconds = this.secondsElapsed % 60;
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    },
  },
});
