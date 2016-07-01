const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const {
  loaders,
  plugins,
  context,
  stats
} = require('./webpack.shared.config')

const bundleName = (ext) => (
  process.env.NODE_ENV === 'production'
    ? `main-[hash].${ext}`
    : `main.${ext}`
)

const cssExtractor = new ExtractTextPlugin(
  bundleName('css'),
  { allChunks: true }
)

const define = new webpack.DefinePlugin({
  'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
  'process.env.BASE_PATH': `'${process.env.BASE_PATH}'`
})

const uglify = new webpack.optimize.UglifyJsPlugin()

const clientPlugins = [
  define,
  cssExtractor
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify)
}

const clientLoaders = [
  {
    test: /\.scss$/,
    loader: cssExtractor.extract(
      'style',
      'css!sass!postcss'
    )
  },
  {
    test: /\.css$/,
    loader: cssExtractor.extract(
      'style',
      'css?module!postcss'
    )
  }
]

module.exports = {
  stats,
  context,
  entry: './client.js',
  node: { fs: 'empty' },
  output: {
    path: `${__dirname}/priv/static/assets`,
    filename: bundleName('js'),
    publicPath: process.env.BASE_PATH || '/'
  },
  module: { loaders: loaders.concat(clientLoaders) },
  plugins: clientPlugins.concat(plugins),
  postcss () {
    return [autoprefixer]
  }
}

