/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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