const path = require ('path')

module.exports = {
  entry: {
    main: path.resolve('src', 'app', 'main.js')
  },

  output: {
    path: path.resolve('public', 'app'),
    filename: '[name].min.js'
  },

  mode: 'production'
}