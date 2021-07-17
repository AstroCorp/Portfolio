module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom: {
          logo: '#445472',
          bg: '#171616',
          box: '#232323',
          text: '#535353',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
