/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // O "zinc" é a paleta oficial do Spotify para os tons de cinza
        gray: colors.zinc,
        // O tom oficial do "Spotify Green"
        spotify: '#1DB954',
      },
      fontFamily: {
        // Adiciona uma fonte limpa e moderna similar à do Spotify
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}