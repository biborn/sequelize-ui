'use strict'
const { join } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelConfig = require('./babel.config')

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?noInfo=false',
    join(__dirname, '..', 'app', 'index')
  ],
  output: {
    path: join(__dirname, '..', 'public-dev'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.hbs'],
    modules: [join(__dirname, '..', 'app'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: ['handlebars-loader']
      },
      {
        test: /\.js$/,
        exclude: join(__dirname, '..', 'node_modules'),
        include: join(__dirname, '..', 'app'),
        use: [{ loader: 'react-hot-loader/webpack' }, { loader: 'babel-loader', options: babelConfig }],
      },
      // {
      //   test:/\.js$/,
      //   use: [ 'react-hot-loader' ],
      //   include: join(__dirname, '..', 'app')
      // },
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
              config: { path: join(__dirname, 'postcss.config.js') }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'DEV - Sequelize UI',
      filename: 'index.html',
      template: 'assets/index.hbs',
      inject: false,
      appFilePath: '/app.js'
    })
  ]
}

