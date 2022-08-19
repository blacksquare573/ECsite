var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: "./assets/js/index.js", // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
    path: path.resolve("../static/cebula/bundles/"),
    filename: "accountSetting-[hash].js", //filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({ filename: "./webpack-stats.json" }),
    new ExtractTextPlugin("accountSetting.css"),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      }, // to transform JSX into JS
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },

  resolve: {
    //modulesDirectories: ['node_modules', 'bower_components'],
    extensions: [".js", ".jsx"],
  },
};
