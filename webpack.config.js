var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  plugins: [
    HTMLWebpackPluginConfig
  ],
  devServer: {
    inline:true,
    contentBase: './public',
    port: 8080
  },
  eslint:{
    configFile:'./.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.less$/, 
        loader: "style-loader!css-loader!less-loader" 
      },
      { test: /\.(png|jpg|gif|woff2|ttf|otf?)$/, loader: "file-loader" },
      {
        test: /\.json$/,            // Load JSON-files into code base.
        //exclude: /node_modules/,
        loader: 'json-loader',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
