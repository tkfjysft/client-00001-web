/** @type {import('tailwindcss').Config} */
// import { siteConfig } from "./src/config/site.ts";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		// extend の外側で screens を定義して、デフォルト値を完全に「殺す」
    screens: {
      'sm': '640px',
      'md': '960px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // 先ほど作った config/site.ts から色を読み込みます
base: '#000000', // 仮の色
        primary: '#3b82f6',
        accent: '#a855f7',
      },
    },
  },
  plugins: [],
};
