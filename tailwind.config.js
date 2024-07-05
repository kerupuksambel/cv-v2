/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(17, 24, 39)',
      },
    },
    fontFamily: {
      // 'ubuntu': ['Ubuntu', 'sans-serif'],
      'subtext': ['Open Sans', 'sans-serif'],
      'header': ['Open Sans', 'sans-serif']
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
