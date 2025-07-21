/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#eab308', // sıcak sarı
          dark: '#b68900',
        },
        secondary: {
          DEFAULT: '#1e293b', // koyu mavi-gri
        },
        accent: {
          DEFAULT: '#fbbf24', // açık sarı
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
