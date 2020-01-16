const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

const sourcePath = path.join(__dirname, 'src');
const destPath = path.join(__dirname, 'extension');
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: {
    background: path.join(sourcePath, 'Background', 'index.ts'),
    options: path.join(sourcePath, 'Options', 'index.tsx'),
    popup: path.join(sourcePath, 'Popup', 'index.tsx')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(destPath, 'js')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}