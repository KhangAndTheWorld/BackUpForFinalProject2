/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
    theme: {
      fill: ({ theme }) => ({
        gray: theme('colors.gray')
      })
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  };
  plugins: [
    require('flowbite/plugin')(
      {
        charts: true,
      }
    )
  ]
