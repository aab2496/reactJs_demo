const {fontFamily} = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...fontFamily.sans]
    },
    screens: {
      'xs': '330px',
      'sm': '400px',
      'md': '960px',
      'lg': '1440px'
    },
  },
},
  plugins: [],
}
