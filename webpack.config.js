const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");
/**
 * @param nodeExternals - ignore node_modules folder,not needed for backend
 */
module.exports = {
  target: "node",
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    server: ["./src/server/server.js"]
  },
  //entry: ["webpack-hot-middleware/client","./src/server/server.js"],
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
      /*, {
                 // Loads the javacript into html template provided.
                 // Entry point is set below in HtmlWebPackPlugin in Plugins 
                 test: /\.html$/,
                 use: [{ loader: "html-loader" }]
             }*/
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
