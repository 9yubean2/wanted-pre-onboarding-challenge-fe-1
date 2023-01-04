/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}

// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{html,js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       // fontFamily: {
//       //   'suit': ['SUIT', 'sans-serif']
//       // },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('flowbite/plugin')
//   ],
// });