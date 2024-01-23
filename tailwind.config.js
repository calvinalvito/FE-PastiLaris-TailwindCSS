/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkGreen:'#0B251C',
        lime:'#B7EB38',
        blackCus:'#040624'
      },
      fontFamily:{
        raleway: ['Raleway', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
        poppins:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

