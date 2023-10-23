/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./explore.html', './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
