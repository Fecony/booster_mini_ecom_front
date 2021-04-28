const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '1600px',
      },
      borderRadius: {
        20: '20px',
      },
      maxWidth: {
        '1/2': '50%',
      },
      gridAutoRows: {
        products: 'minmax(11.25rem, 1fr)',
      },
    },
    colors: {
      ...defaultTheme.colors,
      ...colors,
      itemGray: '#EDEDED',
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
