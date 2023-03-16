const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  client: {
    overlay: true,
    // 웹소켓용 url 지정
    webSocketURL: "ws://0.0.0.0:80/ws",
  },
  entry: path.join(__dirname, "/src"),
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "true",
      template: path.join(__dirname, "/public"),
      fileName: path.join(__dirname, "/dist"),
    }),
  ],
};
