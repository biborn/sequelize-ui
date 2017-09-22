const webpack = require('webpack')
const config = require('../config/webpack.dev.config.js')

const compiler = webpack(config)
const { output: { publicPath } } = config

const devMiddlewareConfig = { publicPath, hot: true }
const hotMiddlewareConfig = { reload: true }

const initialize = app => {
  app.use(require('webpack-dev-middleware')(compiler, devMiddlewareConfig))
  app.use(require('webpack-hot-middleware')(compiler, hotMiddlewareConfig))
}

module.exports = { initialize }
