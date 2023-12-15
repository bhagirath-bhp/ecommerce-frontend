/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
    fontSize: {
      xs: '0.2rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      CrimsonText: ['CrimsonText'],
      LucidaFax: ['LucidaFax'],
      Chivo: ['Chivo'],
      Inter: ['Inter'],
      Julee: ['Julee'],
      LaoMuangDon: ['LaoMuangDon'],
      Roboto: ['Roboto'],

    },
    
    // extend: {},
  },
  plugins: [],
}