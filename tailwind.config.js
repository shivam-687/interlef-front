/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
// const dailyTheme = require('./node_modules/@dailyjs/dailyjs');
module.exports = {
  // mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "Nunito", ...defaultTheme.fontFamily.sans],
      serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
    },
    extends:{

    }
    // extend: {
    //   colors: {
    //     primary: {
    //       DEFAULT: "#5928e5",
    //       light: "#6A3EE8",
    //       dark: "#4720B7"
    //     },
    //     secondary: {
    //       DEFAULT: "#FFD9D9",
    //       light: "#FFE5E5",
    //       dark: "#FFBDBD"
    //     },
    //     accent: {
    //       DEFAULT: "#FFE600",
    //       light: '#FFEE4D',
    //       dark: "#CCB800"
    //     },
    //     danger: {
    //       DEFAULT: "#FF5252",
    //       light: "#FF6D6D",
    //       dark: "#FF3232"
    //     },
    //     success: {
    //       DEFAULT: "#00C851",
    //       light: "#00E676",
    //       dark: "#00B843"
    //     },
    //     warning: {
    //       DEFAULT: "#FFA000",
    //       light: "#FFB400",
    //       dark: "#FF8F00"
    //     },
    //     info: {
    //       DEFAULT: "#00B0F0",
    //       light: "#00E2F0",
    //       dark: "#0090C0"
    //     },

    //     body: "#707070",
    //     heading: "#000000"
    //   },
    // },
  },

  daisyui: {
    themes: [
      "light",
      "dark",
      "dracula",

      {
        interlef_light: {
          primary: "#5928e5",
          "primary-content": "#FFFFFF",
          "primary-dark": '#331782',

          secondary: "#fca5a5",
          "secondary-content": "#000000",

          accent: "#37CDBE",
          "accent-content": "#FFFFFF",

          neutral: "#3D4451",
          "neutral-content": "#FFFFFF",

          "base-100": "#FFFFFF",
          "base-200": "#F5F5F5",
          "base-300": "#EBEBEB",

          info: "#3ABFF8",
          "info-content": "#FFFFFF",

          success: "#36D399",
          "success-content": "#FFFFFF",

          warning: "#FBBD23",
          "warning-content": "#000000",

          error: "#F87272",
          "error-content": "#FFFFFF",

        },
      },
    ],
  },

  plugins: [require("daisyui"), require('@tailwindcss/line-clamp')],
};
