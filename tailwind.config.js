/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }
      'lg':'976',
      
      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("/img/checkmark.png")',
      },
    }
  },
  plugins: [],
}

