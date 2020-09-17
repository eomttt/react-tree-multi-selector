const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/App.jsx',
  resolve: {
    extensions: ['.js', '.jsx'], // .js 또는 .jsx 파일을 찾는다 (entry 안에 app에 있는 파일에 확장자를 붙여서 찾는다)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    libraryTarget: 'commonjs2'
  },
  externals: {
    react: "react"
  }
};