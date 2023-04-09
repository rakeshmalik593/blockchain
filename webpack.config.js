const path = require('path');

module.exports = {
  entry: './public/js/contract.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production'
};