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

      'google-blue': {
        DEFAULT: '#4285F4',
        dark: '#3367d6',
      },

      white: '#ffffff',
      transparent: 'transparent',
    },

    fontFamily: {
      bungee: ['Bungee Shade'],
      roboto: ['Roboto'],
    },

    extend: {
      boxShadow: {
        'google-button': '0 2px 4px 0 rgba(0,0,0,.25)',
        'google-button-blue': '0 0 3px 3px rgba(66,133,244,.3)',
      },

      borderRadius: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
