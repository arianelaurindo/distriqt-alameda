import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/distriqt-alameda/',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
