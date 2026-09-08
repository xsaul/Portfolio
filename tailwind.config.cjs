/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
  canvas: "#f6f5f4",
  ink: "#000000",
  graphite: "#615d59",
  stone: "#757575",
  primary: "#cd6e15",
  "primary-tint": "#fdecd9",
  marigold: "#ffb110",
  coral: "#f64932",
  skywash: "#62aef0",
  midnight: "#02093a",
  "midnight-card": "#0b1042",
},
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
    },
  },
  plugins: [],
};