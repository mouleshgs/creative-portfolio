/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      animation: {
        'blink': 'blink ease-in 3s infinite',
      },
      keyframes: {
        blink: {
          '50%': {borderColor: 'transparent'},
        },
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

