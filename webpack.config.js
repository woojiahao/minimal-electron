const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  IgnorePlugin
} = require('webpack')

const optionalPlugins = []
if (process.platform !== 'darwin') {
  optionalPlugins.push(new IgnorePlugin({
    resourceRegExp: /^fsevents$/
  }))
}

module.exports = [{
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  entry: './src/main/index.ts',
  target: 'electron-main',
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [
    ...optionalPlugins
  ]
}, {
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: './src/renderer/index.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'renderer.js',
    publicPath: path.join(__dirname, './dist')
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
}]