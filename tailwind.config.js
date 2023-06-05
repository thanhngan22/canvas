// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // Hoặc 'media' hoặc 'class'
  theme: {
    extend: {
      // Tùy chỉnh theme tại đây
    },
  },
  variants: {
    extend: {
      // Tùy chỉnh variants tại đây
    },
  },
  plugins: [
    // Thêm các plugins tại đây
  ],
}
