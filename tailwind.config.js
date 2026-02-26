/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        'social-bg': '#8D4657',
        'social-bg-hover': '#995B6A',
      },
      backgroundImage: {
        'visit-gradient': 'linear-gradient(180deg, #803144 0%, #B2838 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};