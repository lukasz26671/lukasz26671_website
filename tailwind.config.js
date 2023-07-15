/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    screens: {
      '3xs': '280px',
      '2xs': '330px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        "glow-red":[
          "0 0px 20px rgba(255, 0, 0, 0.35)",
          "0 0px 65px rgba(255, 0, 0, 0.2)"
        ],
        "glow-lime":[
          "0 0px 20px rgba(50, 205, 50, 0.35)",
          "0 0px 65px rgba(50, 205, 50, 0.2)",
        ],
        "glow-white":[
          "0 0px 20px rgba(255,255,255, 0.35)",
          "0 0px 65px rgba(255,255,255, 0.2)"
        ],
        "glow-violet":[
          "0 0px 20px rgba(127, 0, 255, 0.35)",
          "0 0px 65px rgba(127, 0, 255, 0.2)"
        ],
        "glow-cyan":[
          "0 0px 20px rgba(0,255,255, 0.35)",
          "0 0px 65px rgba(0,255,255, 0.2)"
        ],
        "glow-amber": [
          "0 0px 20px rgba(255, 191, 0, 0.35)",
          "0 0px 65px rgba(255, 191, 0, 0.2)"
        ],
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
