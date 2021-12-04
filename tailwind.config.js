module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        dark: '#343434',
        light: '#cfcfcf',
      },
      'google-blue': '#4285F4',
      white: '#ffffff',
      transparent: 'transparent',
    },

    fontFamily: {
      bungee: ['Bungee Shade'],
      roboto: ['Roboto'],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
