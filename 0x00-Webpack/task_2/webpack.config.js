const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./js/dashboard_main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: ["image-webpack-loader", "file-loader"],
      },
    ],
  },
};
