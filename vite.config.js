import * as path from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import eslint from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/packages-info-app/',

  plugins: [
    vue2(),
    Components({
      resolvers: [VuetifyResolver()],
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    eslint({
      fix: true,
    }),
  ],

  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
});
