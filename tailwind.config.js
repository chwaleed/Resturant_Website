/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#D4A762",
      secondary: "#9A9A9A",
      light: "#FFFCF8",
      dark: "#050709",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        body: ["body", "Arial"],
        heading: ["heading"],
      },
      keyframes: {
        crosal: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "rotate(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
