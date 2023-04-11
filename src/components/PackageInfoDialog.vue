<script setup>
import { computed } from 'vue';
import { usePackagesStore } from '@/stores/packagesStore.js';

const packagesStore = usePackagesStore();

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['input']);

const typeIcon = (type) => {
  return type === 'npm' ? 'mdi-npm' : 'mdi-github';
};

const formattedTags = computed(() => {
  return packagesStore.package.metadata?.tags ? Object.entries(packagesStore.package.metadata.tags) : [];
});
</script>

<template>
  <BaseDialog
    :value="props.value"
    title="Package info"
    :loading="packagesStore.packageLoading"
    :width="'600px'"
    @input="(val) => emit('input', val)"
  >
    <template v-if="!packagesStore.packageLoading">
      <div class="overline pt-2 d-flex align-center">
        {{ packagesStore.package.metadata?.name }}

        <v-icon large>{{ typeIcon(packagesStore.package.metadata?.type) }}</v-icon>
      </div>
      
      <div class="py-1">
        <span v-html="packagesStore.package.badges?.hits"/>

        <span class="px-3" v-html="packagesStore.package.badges?.rank"/>

        <span v-html="packagesStore.package.badges?.typeRank"/>
      </div>

      <v-list dense flat class="pa-0">
        <v-list-item class="pa-0">
          <v-list-item-content class="pa-0">
            <v-chip-group column>
              <v-chip v-for="(tag, i) in formattedTags" :key="i" small>
                <b>{{ tag[0] }} {{ tag[1] }}</b>
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-simple-table
        fixed-header
        height="300px"
      >
        <template #default>
          <thead>
            <tr>
              <th class="text-left">
                Versions
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="({version}, i) in packagesStore.package.metadata?.versions"
              :key="i"
            >
              <td>{{ version }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </BaseDialog>
</template>
