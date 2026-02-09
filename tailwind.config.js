/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F1E8',
        ink: '#2D2D2D',
        gold: '#CFA76E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        // Hier is de nieuwe toevoeging:
        racing: ['"Racing Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};