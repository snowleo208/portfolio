const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: "[name].[contenthash:5].js",
    chunkFilename: "[name].[contenthash:5].js",
    publicPath: "/dist/",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        parallel: true,
        cache: true,
        terserOptions: {
          warnings: false,
        },
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      publicPath: "./",
      filename: "style.[contenthash:5].css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, "./")
    }),
  ]
});