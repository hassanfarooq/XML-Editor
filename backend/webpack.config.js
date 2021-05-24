const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  target: 'node',
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist/backend'),
    filename: 'index.js'
  },
  externals: [nodeExternals({
    modulesFromFile: {
      exclude: ['dependencies']
    }
  })],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
      extractComments: false,
    })]
  },
  node: {
    __dirname: false
  },
  plugins: [
    // new CopyPlugin({ 
    //   // patterns: [
    //   //   // { from: 'config/config.json', to: '' }
    //   // ]
    // }),
  ]
};