const path = require('path');
const nodeEXternals =  require('webpack-node-externals');
const { DefinePlugin } = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/; // все глобальные файлы будут заканчиваться на global.css

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: "server.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals: [nodeEXternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
            onlyLocals: true,
          }
        },
        // 'less-loader'
      ],
      exclude: GLOBAL_CSS_REGEXP  // для глобальных файлов css
      },
      {
        test: GLOBAL_CSS_REGEXP,  // для глобальных файлов css
        use: ['css-loader'] // для глобальных файлов css в серверном конфиге 'style-loader' не нужен
      }
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [ new DefinePlugin({ 'process.env.ClIENT_ID': `'${process.env.ClIENT_ID}'` }) ]
};
