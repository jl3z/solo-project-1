const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
  mode: 'production',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
      {
        test: /\.s[ac]ss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: { '/api': 'http://localhost:3000' },
  },
};
