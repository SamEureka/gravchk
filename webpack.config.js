var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    html: './index.html',
    javascript: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      },
    ],
  },
};
