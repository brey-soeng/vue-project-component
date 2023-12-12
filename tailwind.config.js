/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      default: colors.gray,
      primary: colors.cyan,
      secondary: colors.sky,
      neutral: colors.teal,
      warning: colors.orange,
      danger: colors.red,
      success: colors.emerald,
      main: '#f0f2f5',
      dark: '#2f3349'
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '::-webkit-scrollbar': {
          width: '8px'
          // height: '8px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#a0aec0'
        },
        '::-webkit-scrollbar-thumb': {
          background: '#ced3d7',
          'border-radius': '100vh',
          border: '2px solid #edf2f7'
        },
        '::-webkit-scrollbar-track': {
          'border-radius': '100vh',
          background: '#edf2f7'
        },
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ]
}
