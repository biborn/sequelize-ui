module.exports = {
  presets: [
    'es2015',
    'react'
  ],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'transform-export-extensions'
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel'
      ]
    }
  }
}
