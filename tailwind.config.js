/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "960px",
      desktop: "1248px"
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      indigo: '#4B006E',
      emerald: '#50C878',
      yellowTransparent: '#FFFFFF1A',
      amber: '#FFD233',
      charcoal: '#1E1E1E',
      slateGray: '#494545',
    },
    extend: {},
  },
  plugins: [],
}