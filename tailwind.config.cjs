/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Chakra Petch",
      Inria: "Inria Serif",
      Chakra: "Chakra Petch"
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#FFC000",
        bg_light_primary: "#050505",
        subtitle_secondary: "#121213",
        gray: "#ffffff",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(210deg, rgba(5,5,5,1) 14%, rgba(43,43,43,1) 51%);",
        crossedLinear: "linear-gradient(45deg, rgba(5,5,5,1) 31%, rgba(43,43,43,1) 81%);",
        cardLinear: "linear-gradient(210deg, rgba(5,5,5,1) 44%, rgba(43,43,43,1) 96%);",
        goldenCross: "linear-gradient(210deg, rgba(237,199,80,1) 11%, rgba(255,192,0,1) 50%, rgba(251,255,161,1) 89%); "
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(255, 192, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
