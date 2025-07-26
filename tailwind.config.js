/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'ring': 'ring 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        ring: {
          '0%, 100%': { transform: 'scale(1)' },
          '5%, 15%': { transform: 'scale(1.1)' },
          '10%, 20%': { transform: 'scale(0.9)' },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#BF8150", // sıcak sarı
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#5C2D1D", // koyu mavi-gri
        },
        accent: {
          DEFAULT: "#BF8150", // açık sarı
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: ["Montserrat", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
