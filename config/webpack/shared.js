// Note: You must restart bin/webpack-watcher for changes to take effect

var webpack = require('webpack')
var path = require('path')
var process = require('process')
var glob = require('glob')
var extname = require('path-complete-extname')
var distDir = process.env.WEBPACK_DIST_DIR

if(distDir === undefined) {
  distDir = 'packs'
}

config = {
  entry: glob.sync(path.join('app', 'javascript', 'packs', '*.js*')).reduce(
    function(map, entry) {
      var basename = path.basename(entry, extname(entry))
      map[basename] = path.resolve(entry)
      return map
    }, {}
  ),

  output: { filename: '[name].js', path: path.resolve('public', distDir) },

  module: {
    rules: [
      { test: /\.coffee(.erb)?$/, loader: "coffee-loader" },
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015','stage-0']
        },
      },
      {
        test: /.erb$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'rails-erb-loader',
        options: {
          runner: 'DISABLE_SPRING=1 bin/rails runner'
        }
      },
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env))
  ],

  resolve: {
    extensions: [ '.jsx', '.js', '.coffee' ],
    modules: [
      path.resolve('app/javascript'),
      path.resolve('node_modules')
    ],
    alias: {
      Header: 'packs/components/Header.jsx',
    },
  },

  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  }
}

module.exports = {
  distDir: distDir,
  config: config
}
