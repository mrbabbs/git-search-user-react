const autoreset = require('postcss-autoreset');
const autoprefixer = require('autoprefixer');

module.exports = {
  parser: 'postcss-less',

  plugins: [
    autoprefixer(),
    autoreset()
  ]
}
