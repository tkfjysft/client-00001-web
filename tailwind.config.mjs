/** @type {import('tailwindcss').Config} */
import { siteConfig } from "./src/config/site.ts";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 先ほど作った config/site.ts から色を読み込みます
        base: siteConfig.theme.baseColor,
        primary: siteConfig.theme.primaryColor,
        accent: siteConfig.theme.accentColor,
      },
    },
  },
  plugins: [],
};
