/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#0A0A0C",
          bgLight: "#121215",
          bgCard: "#1C1C21",
          gold: "#D4AF37",
          goldLight: "#DFC260",
          goldDark: "#C59B27",
          text: "#F9F9FB",
          muted: "#8E8E93",
          border: "#2C2C35",
        }
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        sans: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
