const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteWebpackFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const getPath = name => path.resolve(__dirname, name);
const isProd = () => process.env.NODE_ENV === 'production';

const copyFiles = new CopyWebpackPlugin([{
  from: 'src/index.html',
  to: '../index.html'
}]);

const extractCss = new ExtractTextPlugin({
  filename: 'app.bundle.css',
  fallback: 'style-loader'
});

const uglifyJs = new UglifyJsPlugin({
  test: /\.js($|\?)/i,
  parallel: true,
  sourceMap: isProd(),
  uglifyOptions: {
    compress: isProd(),
    output: {
      beautify: !isProd()
    }
  }
});

module.exports = {
  entry: './src/index.js',

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

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
        use: extractCss.extract([
          {
            loader: 'css-loader',
            options: {
              camelCase: 'dashes',
              localIdentName: '[name]__[local]',
              modules: true,
              minimize: isProd(),
              sourceMap: isProd()
            }
          },
          'less-loader',
        ])
      }
    ]
  },

  resolve: {
    alias: {
      '~': getPath('src/')
    }
  },

  plugins: [new WriteWebpackFilePlugin(), copyFiles, extractCss, uglifyJs],

  devServer: {
    contentBase: getPath('dist'),
    port: 9090,
  },

  devtool: 'source-map'
};
