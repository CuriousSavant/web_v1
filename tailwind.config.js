/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IPM: ["IBM Plex Mono", "monospace"],
      }
    },
  },
  plugins: [],
}