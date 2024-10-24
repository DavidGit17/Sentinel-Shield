/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'mono'],
      },
      colors: {
        'custom-purp': '#9600ff',
        'custom-D-gray': '#696969',
        'custom-H-gray': '#5E5E5E',
        'custom-C-gray': '#9E9E9E',
        'custom-Br-gray': '#616161',
      },
    },
  },
  plugins: [],
}

