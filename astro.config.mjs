import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import postcss from 'postcss';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://caramel.horse',
  integrations: [mdx(), sitemap(), tailwind()],
  renderers: [
    // ...
  ],
  vite: {
    plugins: [postcss()]
  }
});