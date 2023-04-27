/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: colors.sky,
      white: colors.white,
      default: colors.gray,
      primary: colors.cyan,
      secondary: colors.sky,
      neutral: colors.teal,
      warning: colors.orange,
      danger: colors.red,
      success: colors.green
    },
    extend: {}
  },
  plugins: []
}
