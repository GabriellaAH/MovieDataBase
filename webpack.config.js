const PATH = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MINICSSEXTRACTPLUGIN = require('mini-css-extract-plugin');
const VENDOR_LIBS = ['react', 'react-dom'];

module.exports = {
  entry: {
    boundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: PATH.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html, *.json$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MINICSSEXTRACTPLUGIN.loader,
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MINICSSEXTRACTPLUGIN({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      'process.enc.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
