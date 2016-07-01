const {
  loaders,
  plugins,
  context,
  stats
} = require('./webpack.shared.config')

module.exports = {
  context,
  stats,
  entry: './server.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: `${__dirname}/priv/react`,
    filename: 'server.js',
    publicPath: process.env.BASE_PATH || '/'
  },
  module: {
    loaders: loaders.concat([
      {
        test: /\.scss$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        loader: 'css-loader/locals?module'
      }
    ])
  },
  plugins
}
