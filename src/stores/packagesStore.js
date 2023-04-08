import { defineStore, acceptHMRUpdate } from 'pinia';
import { getSearchPackages } from '@/api/searchApi.js';
import { debounce } from 'lodash-es';

const DEBOUNCE_DELAY = 400;

export const usePackagesStore = defineStore('packagesStore', {
  state: () => ({
    packages: [],
    packagesLoading: false,
    totalPackages: 0,

    params: {
      text: '',
      size: 10,
      from: 0,
    },
  }),

  getters: {
    totalPages: ({ totalPackages, params }) => {
      return totalPackages / params.size;
    },
  },

  actions: {
    getSearchPackages: debounce(async function () {
      this.packagesLoading = true;

      try {
        const { data } = await getSearchPackages(this.params);

        this.packages = data.objects;

        this.totalPackages = data.total;
      } finally {
        this.packagesLoading = false;
      }
    }, DEBOUNCE_DELAY),

    setSearchParam(param, value) {
      this.params[param] = value;
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePackagesStore, import.meta.hot));
