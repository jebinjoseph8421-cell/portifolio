module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        water: { DEFAULT: "#0F4C4A", light: "#5FB3A9" },
        coir: "#C98A2B",
        paper: "#F1F5F3",
        deep: "#0B1514",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
};
