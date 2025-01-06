/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
       'loop-scroll' :{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation:{
        'loop-scroll' : 'loop-scroll 50s linear infinite',
      },
      fontFamily:{
        Sour:['Helvetica Neue','sour gummy']
      },
      colors:{
        primary: "#c56869",
        secondary: "#f8afa6",
      },
      container:{
        padding:{
          Center: true,
          DEFAULT: "1rem",
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          "2xl":'6rem',
        }
      }
      
    },
  },
  plugins: [],
}