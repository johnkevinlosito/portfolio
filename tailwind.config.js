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
      },
      boxShadow: {
        'xs': '0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1)',
        'all-sm': '3px 3px 15px 0px rgba(0,0,0,0.75)',
      },
      flex: {
        '50': '1 1 50%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
