const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    page2: path.resolve(__dirname, 'src/page2.js'),
    vendor: [
      path.resolve(__dirname, 'src/vendor1.js'),
      path.resolve(__dirname, 'src/vendor2.js'),
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor'],
      minChunks: 2,
    }),
    new BundleAnalyzerPlugin(),
  ]
}
