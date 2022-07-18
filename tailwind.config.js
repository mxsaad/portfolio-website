/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mk-black': '#211F22',
        'mk-gray': '#2D282D',
        'mk-pink': '#F92672',
        'mk-blue': '#66D9EF',
        'mk-green': '#A6E22E',
        'mk-orange': '#FD971F',
        'mk-yellow': '#E5B567',
      },
      fontFamily: {
        'lato': 'Lato, sans-serif;',
        'nautigal': "'The Nautigal', cursive;",
      }
    }
  },
  plugins: [],
}
