/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        light:'#F8F9FD',
        orange:"#FF5C00",
        ash:"#c6c7ca",
        darkGray:"#363439"
      }
    },
  },
  plugins: [],
}

