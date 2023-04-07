import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'node:path';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import eslint from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue2(),
    Components({
      resolvers: [VuetifyResolver()],
    }),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    eslint({
      fix: true,
    }),
  ],

  base: '/packages-info-app/',

  server: {
    port: 3000,
  },

  css: {
    preprocessorOptions: {
      sass: {
        additionalData: [
          '@import "~/vuetify/src/styles/styles.sass"',
          '',
        ].join('\n'),
      },
      css: {
        additionalData: [
          '@import "@/assets/main.css"',
          '',
        ].join('\n'),
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules'),
    },
  },
});
