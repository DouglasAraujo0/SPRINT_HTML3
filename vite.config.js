import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Vue from '@vitejs/plugin-vue';
import ImageminPlugin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Vue(),
    ImageminPlugin({
      optipng: false,
      gifsicle: false,
      jpegtran: true,
      svgo: false,
    }),
  ],
});







