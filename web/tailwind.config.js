const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hoverdark: "#242f40"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-container-sizes')(),
  ],
}
