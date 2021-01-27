const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = merge(common, {
  target: 'webworker',
  entry: './index.js',
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/worker'),
    filename: 'index.js',
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
    minimize: false,
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': JSON.stringify('server'),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  module: {
  }
})

config.plugins = config.plugins.filter((plugin) => {
  return !(plugin instanceof HtmlWebpackPlugin)
})

module.exports = config
