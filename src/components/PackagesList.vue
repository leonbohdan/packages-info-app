<script setup>
import { ref, watch } from 'vue';
import { usePackagesStore } from '@/stores/packagesStore.js';
import { format } from 'date-fns';
import PackageInfoDialog from '@/components/base/PackageInfoDialog.vue';

const packagesStore = usePackagesStore();

packagesStore.getSearchPackages();

const search = ref('');
const showPackageInfoDialog = ref(false);

watch(
  search,
  (value) => packagesStore.setSearchParam('text', value),
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

const footerProps = {
  'items-per-page-options': [5, 10, 15, 20],
  'show-current-page': true,
};

const handleChosenRow = (item, row) => {
  packagesStore.getPackageInfo(item.package.name);

  const selectState = !row.isSelected;

  row.select(selectState);

  showPackageInfoDialog.value = true;
};

const updateTableOptions = ({ page, itemsPerPage } = {}) => {
  const fromItem = (page - 1) * itemsPerPage;

  packagesStore.setSearchParam('size', itemsPerPage);
  packagesStore.setSearchParam('from', fromItem);
};

const dateFormatter = (date) => {
  return date ? format(new Date(date), 'dd-MM-yyyy') : '-';
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
          :footer-props="footerProps"
          item-value="package.name"
          single-select
          :show-select="false"
          item-key="package.name"
          selectable-key="package.name"
          @click:row="handleChosenRow"
          @update:options="updateTableOptions"
        >
          <template #item.package.name="{ item }">
            <span class="text-no-wrap">
              {{ item.package.name }}
            </span>
          </template>

          <template #item.package.version="{ item }">
            <span class="text-no-wrap">
              {{ item.package.version }}
            </span>
          </template>

          <template #item.package.description="{ item }">
            {{ item.package?.description || '-' }}
          </template>

          <template #item.package.author.name="{ item }">
            <span class="text-no-wrap">
              {{ item.package.author?.name || '-' }}
            </span>
          </template>

          <template #item.package.date="{ item }">
            <span class="text-no-wrap">
              {{ dateFormatter(item.package.date) }}
            </span>
          </template>
        </v-data-table>
      </v-sheet>
    </v-container>

    <PackageInfoDialog
      v-model="showPackageInfoDialog"
    />
  </v-card>
</template>
