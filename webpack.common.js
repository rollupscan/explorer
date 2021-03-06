const { VueLoaderPlugin } = require('vue-loader')
const wbepack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const path = require('path')

module.exports = {
  entry: ['./src/entry-client.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          publicPath: 'build',
          esModule: false,
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}
