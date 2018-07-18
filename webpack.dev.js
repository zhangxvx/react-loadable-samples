const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devServer: {
    contentBase: './des',
    inline: true
  },
  mode: 'development'
})