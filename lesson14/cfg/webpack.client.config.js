const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GLOBAL_CSS_REGEXP = /\.global\.css$/; // все глобальные файлы будут заканчиваться на global.css
const DEV_PLUGINS = [ new CleanWebpackPlugin(), new HotModuleReplacementPlugin() ];
const COMMON_PLUGINS = [ new DefinePlugin({ 'process.env.ClIENT_ID': `'${process.env.ClIENT_ID}'` }) ]; // переменная с токеном из package.json `'${process.env.ClIENT_ID}'`

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  alias: {
    'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',

  }
  },
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            }
          },
          // 'less-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP  // для глобальных файлов css
      },
      {
        test: GLOBAL_CSS_REGEXP,  // для глобальных файлов css
        use: ['style-loader', 'css-loader'] // для глобальных файлов css
      }
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: IS_DEV
  },
  devtool: setupDevtool(),
  plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS
};
