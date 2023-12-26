const path = require('path');
const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin')
// console.log(path.resolve(__dirname, '../dist'));
module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  /*{
        //  main: path.resolve(__dirname, './src/index.js'), // here's absolute path to the entry point file
      },*/
  output: {
    filename: 'bundle.js',
    clean: true,
    // Webpack bundles into the dist folder by default. That's why i didn't specify the folder to bundle output into.
    path: path.resolve(__dirname, '../dist'), // I used the relative path (../) because the dist directory is one dir up from here.
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR(enables hot reload)
  ],
  devServer: {
    static: path.resolve(__dirname, '../dist'), // Specify the directory to serve.
    hot: true, // Enable HMR in the dev server(enables hot module reload in dev server)
    open: true,
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.json$/,
    //     loader: 'json-loader'
    //   }
    // ],
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', //babel loader for transpilation(to transpile newer js files to older versions, so that our code can work on older browsers)
        },
      },
    ],
  },
  // resolve: {
  //   extensions: [".js", ".jsx", ".json"],
  //   modules: ['src', 'node_modules'],
  // },
  devtool: 'inline-source-map', // Enable inline source maps

  // optimization: {
  //   minimizer: [new TerserPlugin({
  //     terserOptions: {
  //       output: {
  //         comments: false, // This will remove comments
  //       },
  //     },
  //   })],
  // },
};
