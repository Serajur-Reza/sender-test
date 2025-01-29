<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";
import CreateEntryDialog from "./components/CreateEntryDialog/index.vue";

const visible = ref(false);
</script>

<template>
  <div class="head">
    <h1 class="title">Sorting Training System</h1>
    <!-- <Button className="modalButton" @click="visible = true">
      Start Sorting!
    </Button> -->

    <CreateEntryDialog :visible="visible" />
  </div>
</template>

<style scoped>
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  font-size: 32;
  font-weight: 700;
  padding: 2rem;
}
</style>
