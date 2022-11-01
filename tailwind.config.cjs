/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              "&:hover": {
                color: colors.amber["600"],
              },
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
