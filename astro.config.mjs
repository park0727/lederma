// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.le-derma.co.kr",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en", "ja", "zh"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
