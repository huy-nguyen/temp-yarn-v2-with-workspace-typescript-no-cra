const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirName = "dist";

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, outputDirName),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, outputDirName),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
