<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";

const visible = ref(false);
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
        <InputNumber
          v-model="value4"
          inputId="minmax"
          :min="20"
          :max="100"
          fluid
        />
      </div>
      <template #footer>
        <div class="flex items-center justify-end gap-x-[8px]">
          <Button
            text
            @click="visible = false"
            autofocus
            :style="{
              height: 40,
              background: '#EEEEEE',
              borderRadius: 5,
            }"
            ><span :style="{ padding: '12px 22px' }">Cancel</span>
          </Button>
          <Button
            label="Save"
            outlined
            severity="secondary"
            @click="visible = false"
            :style="{
              height: 40,
              background: '#FF8D00',
              borderRadius: 5,
            }"
            ><span :style="{ padding: '12px 22px', color: 'white' }"
              >Save</span
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
