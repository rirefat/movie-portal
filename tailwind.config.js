/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem"
      },
      colors: {
        primary: "#7f30f7"
      }
    },
  },
  plugins: [],
}