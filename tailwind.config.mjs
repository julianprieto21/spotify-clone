/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fffff1",
        secondary: "#b3b3b3",
        green: "#1ed45e",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
