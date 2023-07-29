/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        veryDarkGrayishCyan: "hsl(183, 100%, 15%)",
        primaryCyan: "hsl(172, 67%, 45%)",
      },

      fontFamily: {
        primary: "Space Mono",
      },
    },
  },
  plugins: [],
};
