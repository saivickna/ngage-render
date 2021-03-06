var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'DBIP': JSON.stringify(process.env.DBIP || '104.131.147.199'),
      'DBPORT': JSON.stringify(process.env.DBPORT || 5000),
      'SOCKETIP': JSON.stringify(process.env.SOCKETIP || '104.131.147.199'),
      'SOCKETPORT': JSON.stringify(process.env.SOCKETPORT || 5500),
      'AUTH0_CLIENT_ID': JSON.stringify(process.env.AUTH0_CLIENT_ID || 'Wnw35lcs32PF5TnkuSu7Aqb3j0sMP0Z4'),
      'AUTH0_DOMAIN': JSON.stringify(process.env.AUTH0_DOMAIN || 'joraffe.auth0.com'),
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ]
};
