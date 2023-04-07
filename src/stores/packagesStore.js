import { defineStore, acceptHMRUpdate } from 'pinia';

export const usePackagesStore = defineStore('packagesStore', {
  state: () => ({
    packages: [],
    packagesLoading: false,
  }),

  getters: {},

  actions: {},
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePackagesStore, import.meta.hot));
