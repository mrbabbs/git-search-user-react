const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteWebpackFilePlugin = require('write-file-webpack-plugin');

const copyFiles = new CopyWebpackPlugin([{
  from: 'src/index.html',
  to: '../index.html'
}]);

const getPath = name => path.resolve(__dirname, name);

module.exports = {
  entry: './src/index.js',

  output: {
    path: getPath('dist/bundle'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/, /.test.js$/]
      },

      {
        test: /.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: 'dashes',
              localIdentName: '[name]__[local]',
              modules: true
            }
          },
          'less-loader',
        ]
      }
    ]
  },

  resolve: {
    alias: {
      '~': getPath('src/')
    }
  },

  plugins: [new WriteWebpackFilePlugin(), copyFiles],

  devServer: {
    contentBase: getPath('dist'),
    port: 9090,
  },

  devtool: 'source-map'
};
