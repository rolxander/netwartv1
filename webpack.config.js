const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        main: path.resolve(__dirname,"src/index.js")
    },
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'src/js/[name][hash].js'
    },module:{       
        rules:[{
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {              
                  publicPath: '../'
                }
              },
              "css-loader"]
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {                  
                  publicPath: '../'
                }
              },
              "css-loader","sass-loader"
            ]
          },         
          { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },
         {
          test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/i,
          use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000000,
                  name : '[name].[hash].[ext]'
                }
              }
            ]

      },
      {
        test: /\.(mp4|webm)$/i,
        use: [
            {
              loader: 'url-loader',
              options: {
                limit: 5000000,
                name : '[name].[ext]'
              }
            }
          ]

    }

        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template:'./index.html',
          filename: './index.html'
      }),
      //new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "./src/css/[name].[hash].css",
        chunkFilename: "css/[id].[hash].css"
      })
    ],
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true,
        contentBase: path.resolve(__dirname,"dist")+"/",
        port: 4000,
        inline: true
    },
  }
