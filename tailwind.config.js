const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero-img': "url('/images/cover.jpeg')",
      },
      backgroundPosition: {
        'bottom-center': 'bottom center',
      },
      height: {
        '70vh': '70vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
