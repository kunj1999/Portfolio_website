const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/src/index.js',
  output: {
     filename: 'bundle_index.js',
     publicPath: 'public',
     path: path.resolve(__dirname+"/public/", "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      inject: "body",
      filename: __dirname + "/public/index.html",
      template: __dirname + "/template-index.html",
      publicPath: "dist/"
    })
  ]
}