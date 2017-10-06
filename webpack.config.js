const ExtractTextPlugin       = require("extract-text-webpack-plugin");
const ManifestPlugin          = require('webpack-manifest-plugin');
const BrowserSyncPlugin       = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin      = require('clean-webpack-plugin')
const path                    = require('path');

var isProd = process.env.NODE_ENV === 'production'; // true of false

module.exports = {
  entry: {
    app: './src/js/app.js',
    contact: './src/js/pages/contact.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].[hash].js'
    //TODO: use [chunkhash] for prod config, app.[hash].js for dev
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //webpack reads loaders right to left
          use: [
              {
                loader: "css-loader",
                options: {
                  alias: {
                    // "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
                  }
                }
              },
              {
                loader: "sass-loader",
                options: {
                  includePaths: [
                    path.resolve('./src/scss/app.scss'),
                    path.resolve('./node_modules/foundation-sites/scss'),
                    path.resolve('./node_modules/foundation-sites/scss/settings'),
                    path.resolve('./node_modules/motion-ui/src'),
                  ]
                }
              }
            ],
          publicPath: '/assets'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: path.resolve(__dirname, '.babelrc')
          }
        }
      }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: 'app.[hash].css',
      allChunks: true
    }),
    new BrowserSyncPlugin( {
        proxy: 'http://webpack.huzzah',
        files: [
            '**/*.php'
        ],
        ui: {
          port: 8080
        }
      }
    ),
    new CleanWebpackPlugin(
      './assets',
      {
        watch: true,
        exclude: ['*.js'] // you need this or the .js randomly goes missing during watched builds
      }
    )
  ]
}
