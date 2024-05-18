/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        'background-primary': '#efefef',
        'background': '#222222',
        'primary-purple': '#bc84f7',
        'secondary-purple': '#820ad1',
        'red-error': '#d01d1c',
        'red-error-secondary': '#ee7c7a'

      }
    },
  },
  plugins: [],
}

