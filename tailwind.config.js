/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e8ff',
          200: '#c8d3fd',
          300: '#a6b7fb',
          400: '#8290f7',
          500: '#646af0',
          600: '#4c48e3',
          700: '#4139c9',
          800: '#3531a2',
          900: '#2D2F7E', // main color
          950: '#1d1b4b',
        },
        secondary: {
          50: '#f3faf4',
          100: '#e3f5e6',
          200: '#c8eacf',
          300: '#9dd8aa',
          400: '#6abe7d',
          500: '#45a25a',
          600: '#358447',
          700: '#296136', // main color
          800: '#275432',
          900: '#22452b',
          950: '#0e2515',
        },
      },
      fontFamily: {
        primary: ['Roboto'],
        headings: ['Anybody'],
      },
    },
  },
  plugins: [],
}
