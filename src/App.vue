<script setup lang="ts">
import Button from "primevue/button";
import { onMounted, ref, watch } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { PeopleService } from "@/data/PeopleService.ts";
import CreateEntryDialog from "@/components/CreateEntryDialog/index.vue";
import Timer from "@/components/Timer/index.vue";
import { usePeopleStore } from "./store/people";
import Tag from "primevue/tag";
import DownIcon from "./assets/icons/downIcon.svg";

const people = usePeopleStore();
const toast = useToast();

const visible = ref(false);
const score = ref(0);
const peopleData = ref(people.returnPeopleList);

// onMounted(() => {
//   PeopleService.getProductsMini().then((data) => (products.value = data));
// });

console.log(peopleData.value);

// const products = ref(PeopleService);

const onRowReorder = (event) => {
  peopleData.value = event.value;
};

watch(peopleData, (newData, oldData) => {
  console.log(newData);
  console.log(oldData);

  people.setPeopleList(newData);

  // const isSortedDesc = (arr) => arr.every((item, i, array) => i === 0 || array[i - 1].potatoes >= item.potatoes);

  const isSorted = newData.every(
    (item, i, array) => i === 0 || array[i - 1].potatoes >= item.potatoes
  );

  score.value++;

  console.log(isSorted, score.value);

  if (isSorted) {
    people.pauseTimer();
    toast.add({
      severity: "success",
      summary: `You succesfully sorted all data. Your score is ${score.value}`,
      // detail: "Please enter a digit between 20 to 100",
      life: 3000,
    });
  }
});
</script>

<template>
  <div class="head">
    <h1 class="title">Sorting Training System</h1>

    <Timer /> <CreateEntryDialog :visible="visible" />
  </div>

  <!-- <DataTable
    :value="peopleData"
    :reorderableColumns="true"
    @columnReorder="onColReorder"
    @rowReorder="onRowReorder"
    tableStyle="min-width: 50rem; padding: 0px 50px"
    class="full-row-drag"
  > -->
  <!-- <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
    <Column
      v-for="col of columns"
      :field="col.field"
      :header="col.header"
      :key="col.field"
      class="drag-handle"
    ></Column> -->

  <DataTable
    v-model:value="people.returnPeopleList"
    :reorderableRows="true"
    @rowReorder="onRowReorder"
    tableStyle="min-width: 50rem; padding: 0px 50px;"
    class="full-row-drag"
  >
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

    <template #header :style="{ padding: ' 0px 50px ' }">
      <h1
        :style="{
          textAlign: 'right',
          padding: ' 0px 50px ',
          fontWeight: 700,
          fontSize: 14,
        }"
      >
        {{ peopleData?.length }} people in the list
      </h1>
    </template>

    <!-- Email Column -->
    <Column field="email" header="Email">
      <template #body="{ data }">
        <div
          class="drag-handle"
          :style="{
            fontWeight: 400,
            fontSize: 14,
          }"
        >
          {{ data.email }}
        </div>
      </template>
    </Column>
    <Column
      rowReorder
      headerStyle="width: 3rem"
      :reorderableColumn="false"
      :style="{ borderRight: '1px solid #DDDDDD' }"
    />

    <!-- Potatoes Column -->
    <Column field="potatoes" header="Potatoes">
      <template #body="{ data }">
        <div
          class="drag-handle"
          :style="{
            fontWeight: 400,
            fontSize: 14,
          }"
        >
          {{ data.potatoes }}
        </div>
      </template>
    </Column>

    <!-- Tags Column -->
    <Column field="tag" header="Tag">
      <template #body="{ data }">
        <Tag
          severity="secondary"
          :style="{
            fontWeight: 400,
            fontSize: 14,
          }"
          >{{ data.tag }}</Tag
        >
        <!-- <div class="drag-handle">{{ data.name }}</div> -->
      </template>
    </Column>

    <!-- Name Column -->
    <Column field="name" header="Name">
      <template #body="{ data }">
        <div
          class="drag-handle"
          :style="{
            fontWeight: 400,
            fontSize: 14,
          }"
        >
          {{ data.name }}
        </div>
      </template>
    </Column>

    <!-- Location Column -->
    <Column field="name" header="Name">
      <template #body="{ data }">
        <div
          class="drag-handle"
          :style="{
            fontWeight: 400,
            fontSize: 14,
          }"
        >
          {{ data.location }}
        </div>
      </template>
    </Column>
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

.p-datatable-header {
  display: flex;
  align-items: center;
  justify-content: end;
}

.full-row-drag .p-datatable-tbody tr td {
  pointer-events: none; /* Allows dragging from anywhere in the row */
}

.full-row-drag .p-datatable-tbody tr td .drag-handle {
  pointer-events: auto; /* Enables clicking inside the cells */
}
</style>
