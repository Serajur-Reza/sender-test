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
  }),
  getters: {
    returnPeopleList(state) {
      // state.people = state.people.sort((a, b) => b?.potatoes - a?.potatoes);
      return state.people;
    },
  },

  actions: {
    addPeopleList(payload) {
      this.people.push(...payload);

      // this.people.sort((a, b) => b?.potatoes - a?.potatoes);

      console.log(this.people);
    },
  },
});
