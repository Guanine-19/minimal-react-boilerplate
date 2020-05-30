const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const paths = {
  public: path.resolve(__dirname, "./public"),
  src: path.resolve(__dirname, "./src"),
  dist: path.resolve(__dirname, "./dist"),
};

module.exports = {
  entry: paths.src + "/index.tsx",
  output: {
    path: paths.dist,
    filename: `bundle.js`,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./public",
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: paths.public + "/index.html",
    }),
  ],
};
