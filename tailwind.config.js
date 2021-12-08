module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        logo: '#445472',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
