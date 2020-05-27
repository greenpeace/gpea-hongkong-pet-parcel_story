module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        notohk: [
          'Noto Sans HK',
          'Microsoft JhengHei',
          'PingFang HK',
          'Helvetica Neue',
          'Heiti TC',
          'Microsoft JhengHei',
          'Arial',
          'sans-serif',
        ],
        nototc: [
          'Noto Sans TC',
          'Microsoft JhengHei',
          'PingFang HK',
          'Helvetica Neue',
          'Heiti TC',
          'Microsoft JhengHei',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        gpgreen: '#66cc00',
        gporange: '#ff9500',
        gpdarkblue: '#292f47',
        arctic: '#62cbd7',
        health: '#f96d8c',
        plastics: '#afaa91',
        climate: '#ffbe00',
        forests: '#00b474',
        oceans: '#008fe2',
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
