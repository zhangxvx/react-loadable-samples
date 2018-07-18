let path = require('path')

let commonSettings = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './src/bundles'),
    filename: "[name].js",
    chunkFilename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, "./src"),
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  target: 'web',
};

module.exports = commonSettings