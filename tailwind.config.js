/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./template/**/*.{js,ts,jsx,tsx}",
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
            primary: "#0A192F",
            secondary: "#112240",
            border: "#233554",
          },
          text: {
            primary: "#64ffda",
            navy: {
              navy: "#8892b0",
              light: "#ccd6f6",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
