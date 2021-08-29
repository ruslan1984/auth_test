const path = require("path");
const webpackRules = require("./webpackRules");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@store": path.resolve(__dirname, "src/store"),
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@forms": path.resolve(__dirname, "src/forms"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@molecules": path.resolve(__dirname, "src/molecules"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            //options: {
            //  modules: true,
            //},
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["url-loader"],
      },
      {
        test: /\.(woff|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '/src/assets/fonts/[name].[ext]'
        }
      },
      {
        enforce: "pre",
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true,
        },
      },
      ...webpackRules,
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 2,
    }),
    new Dotenv(),
  ],
};
