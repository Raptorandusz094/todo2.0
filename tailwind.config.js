/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.liquid"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px '
    },
    extend: {
      colors:
      {brightPurple:'hsl(265, 98%, 67%)',
      brightPurpleLight:'hsl(265, 100%, 86%)',
      brightPurpleSupLight:'hsl(266, 92%, 95%)',
      darkBlue:'hsl(228,39%,23%)',
     dargGraylishBlue:'hsl(227,12%,61%)',
      veryDarkBlue:'hsl(233,12%,13%)',
      veryPaleRed:'hsl(13,100%,96%)',
      veryLightGray:'hsl(0,0,98%)',
    }


    },
  },
  plugins: [],
}

