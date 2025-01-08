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
      },
     keyframes:{
      fadeIn: {
        "0%": { opacity: "0", transform: "translateY(-10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideIn: {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
     },
     animation:{
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in": "slideIn 0.3s ease-in-out",
        "slide-out": "slideOut 0.3s ease-in-out",
     }
    },
  },
  plugins: [],
}

