const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "node",
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    server: ["./src/server/server.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist/server"), //tell webpack the directory where it main. output js,index.html to
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
    new webpack.HotModuleReplacementPlugin()
    /*, new HtmlWebPackPlugin({
             template: path.resolve(__dirname, "src/index.html")
         })*/
  ]
};
