/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/template/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Calibre"', "Inter", '"San Francisco"', '"SF Pro Text"'],
        mono: [
          '"SF Mono"',
          '"Fira Code"',
          '"Fira Mono"',
          '"Roboto Mono"',
          "monospace",
        ],
      },
      colors: {
        primary: {
          background: {
            primary: "#243247",
            secondary: "#112240",
            border: "#334159",
            opacity: "rgba(36, 50, 71, 0.85)",
            shadow: "rgba(2,12,27,0.7)",
          },
          text: {
            primary: "#FF8A63",
            opacity: "rgba(255,138,99,0.1)",
            navy: {
              navy: "#8892b0",
              light: "#ccd6f6",
            },
          },
        },
      },
      boxShadow: {
        custom: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
};
