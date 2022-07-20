/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mk-black': '#1F1C1F',
        'mk-gray': '#2D282D',
        'mk-pink': '#F92672',
        'mk-blue': '#66D9EF',
        'mk-green': '#A6E22E',
        'mk-orange': '#FD971F',
        'mk-yellow': '#E5B567',
        'mk-purple': '#A99DEC',
      },
      fontFamily: {
        'lato': 'Lato, sans-serif;',
        'nautigal': "'The Nautigal', cursive;",
      },
      backgroundImage: {
        'home-vert': "url('/src/img/home-vert.jpg')",
        'home-hor': "url('/src/img/home-hor.jpg')",
      },
    },
  },
  plugins: [],
}