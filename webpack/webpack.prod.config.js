'use strict'

const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const base = require('./webpack.config')

const productionConfig = {
  mode: 'production',
  entry: resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: 'assets/js/bundle.js',
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
}

module.exports = merge(base, productionConfig)
