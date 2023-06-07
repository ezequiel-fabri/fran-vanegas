/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FBFBFB",
        gray: "#D9D9D9",
        textBlack: "#272727",
        vol1: "#BE8F3C",
        vol2: "#EFBD5D",
        vol3: "#F2DCB1",
      },
      borderWidth: {
        3: "3px",
      },
      spacing: {
        "half-screen": "50vh",
        "header-content": "calc(100% - 60px)",
        "logo-height": "calc(100% + 64px)",
      },
      zIndex: {
        9: "9",
        8: "8",
      },
      boxShadow: {
        1: "3px 3px 0px 1px #000000",
        2: "0px -1px 4px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        delayText: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        shakingIn1: {
          "0%": {
            transform: "translateY(0)",
            "z-index": 10,
            "box-shadow": "3px 3px 0px 1px #000000",
          },
          "50%": { transform: "translateY(-250px)", "z-index": 10 },
          "100%": {
            transform: "translateY(-60px)",
            "z-index": 40,
          },
        },

        shakingIn2: {
          "0%": {
            transform: "translateY(0)",
            "z-index": 20,
            "box-shadow": "3px 3px 0px 1px #000000",
          },
          "50%": { transform: "translateY(-200px)", "z-index": 20 },
          "100%": {
            transform: "translateY(-60px)",
            "z-index": 40,
          },
        },
        shakingIn3: {
          "0%": {
            transform: "translateY(0)",
            "z-index": 30,
            "box-shadow": "3px 3px 0px 1px #000000",
          },
          "50%": { transform: "translateY(-200px)", "z-index": 30 },
          "100%": {
            transform: "translateY(-60px)",
            "z-index": 40,
          },
        },
        shakingOut1: {
          "0%": { transform: "translateY(-60px)", "z-index": 40 },
          "50%, 75%": { transform: "translateY(-210px)", "z-index": 40 },
          "75%": { "z-index": 10 },
          "100%": {
            transform: "translateY(0)",
            "z-index": 10,
            "box-shadow": "3px 3px 0px 1px #000000",
          },
        },
        shakingOut2: {
          "0%": { transform: "translateY(-60px)", "z-index": 40 },
          "50%, 75%": { transform: "translateY(-188px)", "z-index": 40 },
          "75%": { "z-index": 20 },
          "100%": {
            "margin-bottom": "0px",
            "z-index": 20,
            "box-shadow": "3px 3px 0px 1px #000000",
          },
        },
        shakingOut3: {
          "0%": { transform: "translateY(-60px)", "z-index": 40 },
          "50%, 75%": { transform: "translateY(-188px)", "z-index": 40 },
          "75%": { "z-index": 30 },
          "100%": {
            "margin-bottom": "0px",
            "z-index": 30,
            "box-shadow": "3px 3px 0px 1px #000000",
          },
        },
      },
      animation: {
        tabShakingIn1: "shakingIn1 .3s .1s ease-in-out both",
        tabShakingIn2: "shakingIn2 .3s .1s ease-in-out both",
        tabShakingIn3: "shakingIn3 .3s .1s ease-in-out both",
        tabShakingOut1: "shakingOut1 .3s ease-in-out forwards",
        tabShakingOut2: "shakingOut2 .3s ease-in-out forwards",
        tabShakingOut3: "shakingOut3 .3s ease-in-out forwards",
        delayText: "delayText 1s 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
