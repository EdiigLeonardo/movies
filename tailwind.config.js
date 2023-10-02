/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extends:{
      colors:{
        "neutral": "#2b3440",
        "warning": "#fbbd23",
        "second": "#235C6F",
        "background": "#484D5F",
        "deep": "#6A667E",
      }
    },
  },
  plugins: [require("daisyui")],
}

