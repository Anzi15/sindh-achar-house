/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        brandBrown: "#5E2C05",
        brandRed: "#BC3434"
      },
      backgroudImage:{
        'low-resolution-hero-cover':"url(/src/assets/website cover blur 100.png)"
      },
      fontFamily: {
        futura: ['Futura'],
      },
    },
  },
  plugins: [],
};
