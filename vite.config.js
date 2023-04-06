import { defineConfig, splitVendorChunkPlugin } from 'vite';
import * as path from 'path';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import eslint from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

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
          // '@import "~vuetify/src/styles/styles.sass"',
          '@import "@/assets/main.css"',
          '',
        ].join('\n'),
      },
    },
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('./src'),
      },
      {
        find: '~',
        replacement: resolve('./node_modules'),
      },
      {
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],

    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
