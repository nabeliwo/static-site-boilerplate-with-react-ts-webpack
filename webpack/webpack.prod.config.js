'use strict'

const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const merge = require('webpack-merge')

const base = require('./webpack.config')

const productionConfig = {
  mode: 'production',
  entry: resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: 'assets/js/[name].[chunkhash].bundle.js',
    chunkFilename: 'assets/js/[name].[chunkhash].[id].bundle.js',
    path: resolve(__dirname, '../public'),
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: resolve(__dirname, '../'),
        from: 'static'
      },
    ]),
    new HtmlWebpackPlugin({ template: resolve(__dirname, '../static/index.html') }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
}

module.exports = merge(base, productionConfig)
