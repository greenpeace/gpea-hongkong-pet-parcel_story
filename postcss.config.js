module.exports = {
  plugins: [
    require('tailwindcss')('./tailwindcss.config.js'),
    require('autoprefixer'),
  ],
};

/*
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwindcss-config.js'),
    require('postcss-modules'),
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};
*/
