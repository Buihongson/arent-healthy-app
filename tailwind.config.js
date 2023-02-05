/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-300': '#FFCC21',
        'primary-400': '#FF963C',
        'primary-500': '#EA6C00',
        'secondary-300': '#8FE9D0',
        'secondary-300': '#8FE9D0',
      },
      fontFamily: {
        noto_sans: ['NotoSansJP-Thin', 'Helvetica', 'Arial', 'sans-serif'],
        inter_sans: ['Inter-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      },
      background: {
        'linear-300':
          ' linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
