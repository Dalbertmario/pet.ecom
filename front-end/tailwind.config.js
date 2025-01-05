export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '480px',
      xs: '280px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        'condensed': ['"Roboto Condensed"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

