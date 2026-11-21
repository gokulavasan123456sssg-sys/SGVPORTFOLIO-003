/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pureBlack: "#050505",
        deepRed: "#B50016",
        fieryRed: "#FF2020",
        burntOrange: "#FF5A00",
        goldenOrange: "#FF9B24",
        cinematicDark: "#0c0a09",
        cinematicGray: "#1a1a1a",
      },
      fontFamily: {
        cinematic: ['"Cinzel"', 'serif'],
        display: ['"Montserrat"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'cinematic-gradient': 'linear-gradient(135deg, #050505 0%, #170507 40%, #2a0808 100%)',
        'fiery-gradient': 'linear-gradient(90deg, #FF2020 0%, #FF5A00 50%, #FF9B24 100%)',
        'title-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FF9B24 60%, #FF2020 100%)',
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(255, 32, 32, 0.45)',
        'glow-orange': '0 0 35px -5px rgba(255, 90, 0, 0.45)',
        'glow-title': '0 0 50px rgba(255, 32, 32, 0.6), 0 0 100px rgba(255, 90, 0, 0.3)',
      },
      keyframes: {
        'flame-pulse': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        'film-grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '50%': { transform: 'translate(-15%, 5%)' },
          '70%': { transform: 'translate(7%, 10%)' },
          '90%': { transform: 'translate(-10%, 15%)' },
        }
      },
      animation: {
        'flame-pulse': 'flame-pulse 3s ease-in-out infinite',
        'film-grain': 'film-grain 8s steps(10) infinite',
      }
    },
  },
  plugins: [],
}
