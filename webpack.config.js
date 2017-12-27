const path = require('path');

const config = {
  entry: path.join(__dirname, './public/index.js'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;
