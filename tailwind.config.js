/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    fontFamily: {
      'times': ['Times New Roman', 'serif'],
      'pixels': ['Rubik Pixels', 'sans-serif'],
      'zilla': ['Zilla Slab Highlight', 'sans-serif'],
      'yomogi': ['Yomogi', 'sans-serif'],
    },
    extend: {
      colors: {
        'navbar': '##3A313E',
      },
      backgroundImage: {
        'rocket': "url(./src/assets/rocket.jpg)",
      },
    },
  },
  plugins: [],
}