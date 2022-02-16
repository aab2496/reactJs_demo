const {fontFamily} = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...fontFamily.sans]
    },
  },
},
  plugins: [require('tw-elements/dist/plugin')],
}
