// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          colpalete: {
            

  50: '#fff9dc',
  100: '#faecb2',
  200: '#f5e086',
  300: '#f2d458',
  400: '#eec72b',
  500: '#d4ae11',
  600: '#a58709',
  700: '#766104',
  800: '#483a00',
  900: '#1b1300',

         },
          bms: 
          {
            50: '#e8f3ff',
            100: '#cfd8e3',
            200: '#b5bdcc',
            300: '#97a3b4',
            400: '#7b899d',
            500: '#626f84',
            600: '#4b5768',
            700: '#343e4b',
            800: '#2b3147',
            900: '#070c18',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };