'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '..', 'app', 'index')
  ],
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'app.dev.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.hbs'],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      },
      {
        test: /\.js$/,
        exclude: path.join(__dirname, '..', 'node_modules'),
        include: path.join(__dirname, '..', 'app'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              extends: path.join(__dirname, '.babelrc')
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]--[local]--[hash:base64:8]',
                camelCase: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: { path: path.join(__dirname, 'postcss.config.js') }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'DEV - Sequelize UI',
      filename: 'index.dev.html',
      template: 'assets/index.hbs',
      inject: false,
      appFilePath: '/public/app.dev.js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new ExtractTextPlugin('[name].dev.css')
  ]
}

