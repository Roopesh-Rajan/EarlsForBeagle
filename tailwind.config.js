/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
  theme: {
    extend: {
      fontFamily:{
        title:["Tangerine", "cursive"],
        menu:["Poppins", "sans-serif"],
        body:["Poppins", "sans-serif"],
        Rubik:["Rubik", "sans-serif"],
      },
      colors: {

       slate:'#0B1315',
        gold: '#fb923c',
        emerald: '#50C878', 
        charcoal: '#333333',
        blueblack: '#0f1c23'
      },
    },
  },
  plugins: [],
}

