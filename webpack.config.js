const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["webpack/hot/poll?1000", "./src/index.ts"],
  mode: "development",
  target: "node",
  output: {
    path: path.join(__dirname, "build/"),
    filename: "bundle.js",
  },
  externals: [nodeExternals({ whitelist: ["webpack/hot/poll?1000"] })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".js", ".ts"],
  },
};
