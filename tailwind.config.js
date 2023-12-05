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
        'orange-100':'#DC8558',
        'light-orange':'#fff5ee',
        ash:"#c6c7ca",
        darkGray:"#363439",
        green:'#38715B',
       "green-100":'#f1faeb',
       "green-200":"#E0F2D4",
       blue:"#3871A5",
       "blue-100":'#ecf6ff',
       "blue-200":'#D4E8FA'
      }
    },
  },
  plugins: [],
}

