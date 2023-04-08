import { defineStore, acceptHMRUpdate } from 'pinia';
import { getSearchPackages } from '@/api/searchApi.js';
import { getPackageMetadata, getPackageStats, getPackageBadge } from '@/api/packagesApi.js';
import { debounce } from 'lodash-es';

const DEBOUNCE_DELAY = 400;

export const usePackagesStore = defineStore('packagesStore', {
  state: () => ({
    packages: [],
    packagesLoading: false,
    totalPackages: 0,

    package: {
      stats: null,
      badges: null,
      metadata: null,
    },
    packageLoading: false,

    params: {
      text: '',
      size: 10,
      from: 0,
    },

    packageTypesParams: {
      hits: 'hits',
      rank: 'rank',
      'type-rank': 'type-rank',
    },

    packagePeriodParams: {
      period: 'month',
    },
  }),

  getters: {},

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
    
    async getPackageInfo(packageName) {
      this.packageLoading = true;

      try {
        const stats = await getPackageStats(packageName, this.packagePeriodParams);

        const metadata = await getPackageMetadata(packageName);

        const badgeHits = await getPackageBadge(packageName, { type: this.packageTypesParams['hits'] });
        const badgeRank = await getPackageBadge(packageName, { type: this.packageTypesParams['rank'] });
        const badgeTypeRank = await getPackageBadge(packageName, { type: this.packageTypesParams['type-rank'] });

        this.package.stats = stats.data;
        this.package.badges = {
          hits: badgeHits.data,
          rank: badgeRank.data,
          typeRank: badgeTypeRank.data,
        };
        this.package.metadata = metadata.data;
      } finally {
        this.packageLoading = false;
      }
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePackagesStore, import.meta.hot));
