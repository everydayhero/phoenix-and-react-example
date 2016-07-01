const loaders = [
  {
    test: /\.json$/,
    loader: 'json'
  },
  {
    test: /\.js?$/,
    include: /(node_modules\/boiler-room-runner|web\/static)/,
    loader: 'babel',
    query: {
      presets: [
        'es2015',
        'stage-0',
        'react'
      ]
    }
  },
  {
    test: /(\.png|\.jpg|\.svg|\.eot|\.ttf|\.woff)$/,
    loader: 'file-loader'
  }
]

module.exports = {
  stats: { children: false },
  context: `${__dirname}/web/static`,
  loaders,
  plugins: []
}
