/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#2BD0D0',
      lightGray: '#9E9AA8',
      dark: '#34313D',
      darkBlue: '#3A3054',
      navy: '#4B3F6B',
      smoke: '#EFF1F7',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}