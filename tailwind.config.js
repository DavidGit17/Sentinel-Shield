/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'mono'],
        sfui: ['SfuiDisplay', 'sans-serif'],
    },
    colors: {
      'custom-purp1': '#9600ff',
      'custom-purp2': '#9747FF',
      'custom-D-gray': '#696969',
      'custom-H-gray': '#5E5E5E',
      'custom-Ht-gray': '#BFBFBF',
      'custom-C-gray': '#9E9E9E',
      'custom-Br-gray': '#616161',
      'custom-Lm-gray': '#191919',
    },
    borderRadius: {
      'custom-borad': '12px',
    }
  },
},
plugins: [],
}

