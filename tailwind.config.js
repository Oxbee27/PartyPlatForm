/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],

  theme: {
    extend: {
      colors: {
        party: {
          red: '#C62828',
          redDark: '#9E1F1F',
          redLight: '#E53935',

          green: '#087443',
          greenDark: '#063B25',
          greenDeep: '#042A1A',
          greenLight: '#E8F5EE',

          white: '#FFFFFF',
          paper: '#FAFCFA',
          ink: '#12221A',
        },

        forest: {
          50: '#E8F5EE',
          100: '#D3EBDD',
          200: '#A8D7BC',
          300: '#70BA91',
          400: '#3A9868',
          500: '#087443',
          600: '#076238',
          700: '#064D2E',
          800: '#063B25',
          900: '#042A1A',
        },

        gold: {
          100: '#F8F8F8',
          300: '#EAEAEA',
          500: '#D9D9D9',
          600: '#BDBDBD',
          700: '#888888',
        },

        mint: {
          50: '#F4FAF6',
          100: '#E8F5EE',
          200: '#D3EBDD',
        },

        paper: '#FAFCFA',
        ink: '#12221A',
      },

      fontFamily: {
        display: [
          '"Fraunces"',
          'ui-serif',
          'Georgia',
          'serif',
        ],

        body: [
          '"Public Sans"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },

      maxWidth: {
        prose: '66ch',
      },
    },
  },

  plugins: [],
};