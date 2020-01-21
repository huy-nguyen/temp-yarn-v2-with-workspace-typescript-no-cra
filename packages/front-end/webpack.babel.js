const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PnpWebpackPlugin = require("pnp-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require(`fork-ts-checker-webpack-plugin`);

const outputDirName = "dist";

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, outputDirName),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: require.resolve("babel-loader"),
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, outputDirName),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(PnpWebpackPlugin.forkTsCheckerOptions({
      checkSyntacticErrors: true,
    })),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [
      // From https://github.com/arcanis/pnp-webpack-plugin
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      // From https://github.com/arcanis/pnp-webpack-plugin
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
}
