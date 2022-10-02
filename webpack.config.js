const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
      },
}