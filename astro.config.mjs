import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank", rel: [] }]],
    extendDefaultPlugins: true,
  },
  site: "https://youssefm.github.io",
});
