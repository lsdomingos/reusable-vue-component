const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  externals: {
    moment: 'moment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'reusable-vue-component.min.js',
      libraryTarget: 'window',
      library: 'ReusableComponent',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/ReusableComponent.vue'),
    output: {
      filename: 'reusable-vue-component.js',
      libraryTarget: 'umd',
      library: 'ReusableComponent',
      umdNamedDefine: true
    }
  })
];
