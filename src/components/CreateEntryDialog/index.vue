<script setup>
import { computed, ref } from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";
import Divider from "primevue/divider";
import { useToast } from "primevue/usetoast";
import { usePeopleStore } from "../../store/people";

const toast = useToast();
const peopleStore = usePeopleStore();

const visible = ref(false);
const num_of_people = ref(0);
const disableButton = ref(false);

console.log(disableButton?.value, visible);

const disableButtonHandler = computed(() => {
  disableButton.value = !disableButton.value;
});

const createUsers = (e) => {
  console.log(num_of_people?.value);
  if (num_of_people?.value < 20 || num_of_people?.value > 100) {
    toast.add({
      severity: "error",
      summary: "Please enter a digit between 20 to 100",
      // detail: "Please enter a digit between 20 to 100",
      life: 3000,
    });
  } else {
    // disableButton.value = true;
    // await setTimeout(() => {
    //   const arr = [];

    //   for (let i = 0; i < Number(num_of_people?.value); i++) {
    //     arr.push({
    //       name: "abc",
    //       potatoes: Math.floor(Math.random() * 100),
    //       email: "abc@gmail.com",
    //     });
    //   }
    //   peopleStore?.addPeopleList(arr);
    //   visible.value = true;
    // }, 5000);
    // disableButton.value = false;

    disableButton.value = true;
    // countdown.value = 5; // Reset countdown

    const interval = setInterval(() => {
      // if (countdown.value === 0) {
      //   clearInterval(interval);
      //   disableButton.value = false;
      // }

      const arr = [];

      for (let i = 0; i < Number(num_of_people?.value); i++) {
        arr.push({
          name: "abc",
          potatoes: Math.floor(Math.random() * 100),
          email: "abc@gmail.com",
        });
      }
      peopleStore?.addPeopleList(arr);
      clearInterval(interval);
      visible.value = true;
    }, 5000);

    disableButton.value = false;
  }
};
</script>

<template>
  <div class="card flex justify-center">
    <Button class="modalButton" @click="visible = true">
      Start Sorting!
    </Button>
    <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
      <template #header>
        <!-- <div class="inline-flex items-center justify-center gap-2">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
          <span class="font-bold whitespace-nowrap">Amy Elsner</span>
        </div> -->
        <h1 class="modalTitle">How many people?</h1>
      </template>
      <Divider />
      <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8"
        >Update your information.</span
      > -->
      <!-- <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>-->
      <div class="gap-4 mb-2">
        <label for="email" :style="{ fontWeight: 400, fontSize: 13 }"
          >Enter a number of how many people you want to add to the list.</label
        >
        <InputNumber v-model="num_of_people" inputId="minmax" fluid />
      </div>

      <Divider />
      <template #footer>
        <div class="flex items-center justify-end gap-x-[8px]">
          <Button
            text
            @click="visible = false"
            autofocus
            :style="{
              height: 30,
              background: '#EEEEEE',
              borderRadius: 5,
            }"
            ><span :style="{ padding: '12px 22px', color: '#555555' }"
              >Cancel</span
            >
          </Button>
          <Button
            outlined
            severity="secondary"
            @click="createUsers"
            :style="{
              height: 40,
              background: !disableButton ? '#FF8D00' : 'gray',
              borderRadius: 5,
            }"
            :disabled="disableButton"
            ><span :style="{ padding: '12px 22px', color: 'white' }"
              >Start</span
            ></Button
          >
        </div>
      </template>
    </Dialog>
  </div>
</template>

<style scoped>
.modalButton {
  background-color: #ff8d00;
  width: 161px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 15;
  font-weight: 700;
}

.modalTitle {
  font-weight: 700;
  font-size: 18;
}

.card {
  background: "gray";
  /* border: "black"; */
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
