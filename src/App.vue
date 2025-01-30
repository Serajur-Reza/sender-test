<script setup lang="ts">
import Button from "primevue/button";
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Toast from "primevue/toast";
import { PeopleService } from "@/data/PeopleService.ts";
import CreateEntryDialog from "@/components/CreateEntryDialog/index.vue";
import { usePeopleStore } from "./store/people";

const people = usePeopleStore();
const visible = ref(false);

const peopleData = ref(people.returnPeopleList);

// onMounted(() => {
//   PeopleService.getProductsMini().then((data) => (products.value = data));
// });

console.log(peopleData.value);

const columns = ref([
  { field: "name", header: "Name" },
  { field: "potatoes", header: "Potatoes" },
  { field: "email", header: "Email" },
]);
// const products = ref(PeopleService);

const onColReorder = () => {};
const onRowReorder = (event) => {
  peopleData.value = event.value;
};
</script>

<template>
  <div class="head">
    <h1 class="title">Sorting Training System</h1>

    <CreateEntryDialog :visible="visible" />
  </div>

  <DataTable
    :value="peopleData"
    :reorderableColumns="true"
    @columnReorder="onColReorder"
    @rowReorder="onRowReorder"
    tableStyle="min-width: 50rem; padding: 0px 50px"
  >
    <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
    <Column
      v-for="col of columns"
      :field="col.field"
      :header="col.header"
      :key="col.field"
    ></Column>
  </DataTable>

  <Toast position="top-center" />
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

/* .table {
  padding: "0px 10px ";
} */
</style>
