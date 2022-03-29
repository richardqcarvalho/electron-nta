const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: './src/renderer/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/renderer/src/assets', to: 'assets' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        use: ['svg-url-loader'],
      },
    ],
  },
};
