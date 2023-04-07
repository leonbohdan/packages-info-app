<script setup>
import { ref, watch } from 'vue';
import { usePackagesStore } from '@/stores/packagesStore.js';

const packagesStore = usePackagesStore();

packagesStore.getSearchPackages();

const search = ref('');

watch(
  search,
  (value) => packagesStore.setSearchParam(value),
  { deep: true },
);

watch(
  () => packagesStore.params,
  () => packagesStore.getSearchPackages(),
  { deep: true },
);

const headers = ref([
  {
    value: 'package.name',
    text: 'Name',
    sortable: false,
    filterable: true,
  }, {
    value: 'package.version',
    text: 'Version',
    align: 'center',
    sortable: false,
  },{
    value: 'package.description',
    text: 'Description',
    align: 'center',
    sortable: false,
  },{
    value: 'package.author.name',
    text: 'Author',
    align: 'center',
    sortable: false,
  },{
    value: 'package.date',
    text: 'Date',
    align: 'center',
    sortable: false,
  },
]);

const handleRowClick = () => {
  console.log('handleRowClick');
};

const updateTableOptions = () => {
  console.log('updateTableOptions');
};
</script>

<template>
  <v-card>
    <v-container fluid class="mb-0">
      <v-sheet outlined rounded class="overflow-hidden">
        <v-expand-transition>
          <v-row dense align="center">
            <v-col cols="auto" class="pa-4 mr-auto">
              <BaseSearch
                v-model="search"
              />
            </v-col>
          </v-row>
        </v-expand-transition>

        <v-divider/>
      
        <v-data-table
          :loading="packagesStore.packagesLoading"
          :items-per-page="packagesStore.params.size"
          :headers="headers"
          :items="packagesStore.packages"
          :server-items-length="packagesStore.totalPackages"
          item-value="package.name"
          single-select
          :show-select="false"
          item-key="package.name"
          selectable-key="package.name"
          @click:row="handleRowClick"
          @update:options="updateTableOptions"
        >
          d
        </v-data-table>
      </v-sheet>
    </v-container>
  </v-card>
</template>
