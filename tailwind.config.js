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
          background: "#0A192F",
          primary: "#64ffda",
          secondary: {
            100: "#ccd6f6",
            200: "#8892b0",
          },
        },
      },
    },
  },
  plugins: [],
};
