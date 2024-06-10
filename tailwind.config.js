/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '600px':'600px',
        '650px':'650px',
        '700px':'700px',
        '750px':'750px',
        '800px':'800px',
        '850px':'850px',
        '900px':'900px',
        '950px':'950px',
        '1100px':'1100px',
        '1400px':'1400px',
        '1500px':'1500px',
      }
    },
  },
  plugins: [],
}