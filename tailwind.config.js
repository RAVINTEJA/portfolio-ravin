/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      screens:{
        "2xl": {max: "1535px"},
        // => @media (max-width: 1535px) {...}

        "xl": {max: "1279px"},
        // => @media (max-width: 1279px) {...}

        "lg": {max: "1023px"},
        // => @media (max-width: 1023px) {...}

        "ex":{max: "1023px",min:"768px"},
        // => @media (max-width: 1023px) {...}

        "md": {max: "767px"},
        // => @media (max-width: 767px) {...}

        "exmd": {max: "767px",min:"100px"},
        // => @media (max-width: 767px) {...}

        "sm": {max: "639px"},
        // => @media (max-width: 639px) {...}

        "xs": {max: "479px"},
        // => @media (max-width: 479px) {...}
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
        circularLightXs:
          "repeating-radial-gradient(rgba(0,0,0,.4) 2px,#f5f5f5 5px,#f5f5f5 30px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,.4) 2px,#f5f5f5 5px,#f5f5f5 35px)",
        circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,.4) 2px,#f5f5f5 5px,#f5f5f5 50px)",
        circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        circularDark:
          "repeating-radial-gradient(hsla(0,0%,100%,.5) 2px, #1b1b1b 5px, #1b1b1b 100px)",
        circularDarkXs:
          "repeating-radial-gradient(hsla(0,0%,100%,.5) 2px, #1b1b1b 5px, #1b1b1b 30px)",
        circularDarkSm:
          "repeating-radial-gradient(hsla(0,0%,100%,.5) 2px, #1b1b1b 5px, #1b1b1b 35px)",
        circularDarkMd:
          "repeating-radial-gradient(hsla(0,0%,100%,.5) 2px, #1b1b1b 5px, #1b1b1b 50px)",
        circularDarkLg:
          "repeating-radial-gradient(hsla(0,0%,100%,.5) 2px, #1b1b1b 5px, #1b1b1b 80px)",
      },
      plugins: [],
    },
  },
};
