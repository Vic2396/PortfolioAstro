// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const BASE_PATH = 'PortfolioAstro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: `https://github.com/Vic2396/${BASE_PATH}`,
  base: BASE_PATH,
  output: 'static'
});