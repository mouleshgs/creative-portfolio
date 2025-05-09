/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['monospace'],
      },
      animation: {
        'blink': 'blink ease-in 3s infinite',
      },
      fontSize: {
        '10xl': '15rem',
        'la': '1.1rem',
      },
      spacing: {
        70: '30rem',
        50: '18rem',
      },
    },
  },
  plugins: [],
}

