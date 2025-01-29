<script setup lang="ts">
import Button from "primevue/button";
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import { PeopleService } from "@/data/PeopleService.ts";
import CreateEntryDialog from "@/components/CreateEntryDialog/index.vue";

const visible = ref(false);

// onMounted(() => {
//   PeopleService.getProductsMini().then((data) => (products.value = data));
// });

const columns = ref([
  { field: "code", header: "Code" },
  { field: "name", header: "Name" },
  { field: "category", header: "Category" },
  { field: "quantity", header: "Quantity" },
]);
const products = ref(PeopleService);

const onColReorder = () => {};
const onRowReorder = (event) => {
  products.value = event.value;
};
</script>

<template>
  <div class="head">
    <h1 class="title">Sorting Training System</h1>

    <CreateEntryDialog :visible="visible" />
  </div>

  <DataTable
    :value="products"
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
