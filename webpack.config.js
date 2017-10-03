const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');
const webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production'; // true of false

// setup dev vs prod css
var cssDev = [
  {
    loader: "style-loader"
  },
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
        path.resolve('./node_modules/foundation-sites/scss'),
        path.resolve('./node_modules/foundation-sites/scss/settings'),
        path.resolve('./node_modules/motion-ui/src'),
      ]
    }
  }
];
var cssProd = ExtractTextPlugin.extract({
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
          path.resolve('./node_modules/foundation-sites/scss'),
          path.resolve('./node_modules/foundation-sites/scss/settings'),
          path.resolve('./node_modules/motion-ui/src'),
        ]
      }
    }
  ],
    publicPath: '/dist'
  });
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js',
    contact: './src/contact.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
    //use [chunkhash] for prod config, app.[hash].js for dev
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
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
  // all files in devServer are served from memory, so no files are created in /dist
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    inline: true,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project',
      filename: './../index.html',
      template: './src/index.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'Contact Page',
      filename: './../contact.html',
      template: './src/contact.ejs'
    }),
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: 'app.[hash].css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
