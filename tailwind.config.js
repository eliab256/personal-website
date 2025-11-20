/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-blue": "#0a0a83",
        "logo-dark": "#131313",
        "logo-light-blue": "#2626cd",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        bold: "700",
      },
      backgroundImage: {
        "gradient-logo": "linear-gradient(135deg, #0a0a83 0%, #131313 100%)",
        "gradient-logo-reverse": "linear-gradient(135deg, #131313 0%, #0a0a83 100%)",
      },
      keyframes: {
        fillWidth: {
          "0%": { width: "0%" },
          "100%": { width: "var(--final-width)" },
        },
      },
      animation: {
        fillWidth: "fillWidth 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
