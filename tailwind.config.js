export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0569ff",
        success: "#026b29",
        orange: "#ea580c",
        light_primary: "#468bf1",
        light_success: "#16a34a",
        light_orange: "#fb7813",
        secondary: "#69a79c",
        secondary2: "#2563eb",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
        fadeIn: "fadeIn 0.4s ease-in",
      },
    },
  },
  plugins: [],
};
