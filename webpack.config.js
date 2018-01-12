const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteWebpackFilePlugin = require('write-file-webpack-plugin');

const copyFiles = new CopyWebpackPlugin([{
  from: 'src/index.html',
  to: '../index.html'
}]);

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist/bundle'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      { test: /.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [new WriteWebpackFilePlugin(), copyFiles],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9090,
  }
};
