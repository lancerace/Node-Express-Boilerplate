require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  target: "node",
  mode: process.env.MODE,
  devtool: "cheap-module-eval-source-map",
  entry: {
    server: "./server.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"), //tell webpack the directory where it main. output js,index.html to
    publicPath: "/", //the url of output.path shown in browser
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    hotUpdateChunkFilename: "[name]-hot.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: ["node_modules", "component"],
    extensions: [".js", ".jsx", ".css"]
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      excludeChunks: ["server"]
    })
    /*, new HtmlWebPackPlugin({
             template: path.resolve(__dirname, "src/index.html")
         })*/
  ],
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: 8080, // Defaults to 8080
    open: true // Open the page in browser
  }
};
