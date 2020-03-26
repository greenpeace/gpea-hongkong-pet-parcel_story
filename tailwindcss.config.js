module.exports = {
  theme: {
    /* Default Breakpoints of Tailwindcss
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
    */
    extend: {
      fontFamily: {
        notohk: [
          'Noto Sans HK',
          'Microsoft JhengHei',
          'PingFang HK',
          'Helvetica Neue',
          'Heiti TC',
          'Microsoft JhengHei',
          'Arial, sans-serif',
        ],
        nototc: [
          'Noto Sans TC',
          'Microsoft JhengHei',
          'PingFang HK',
          'Helvetica Neue',
          'Heiti TC',
          'Microsoft JhengHei',
          'Arial, sans-serif',
        ],
      },
      colors: {
        gpgreen: '#66cc00',
        gporange: '#ff9500',
        gpdarkblue: '#292f47',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '2rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
};
