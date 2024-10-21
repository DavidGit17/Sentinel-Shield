/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'mono'],
        playwrite:['Playwrite', 'mono'],
      },
      colors:{
        'custom-purple': '#9600ff' ,
        'custom-skyblue': '#38329d' ,
      },
    },
  },
  plugins: [],
}

