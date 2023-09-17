/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      londrina: 'Londrina Outline'
    },

    extend: {
      colors: {
        primary: '#437EED',
        secondary: '#FFD2E4',
        third: '#C3003C',
        textPrimary:'#464D5E'
      },

      fontWeight: {
        'semibold': 600,
        'bold': 800, // Peso de fuente extranegrilta
      },
    },
  },
  plugins: [],
}

