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
      path: __dirname + '/dist/',
      filename: 'src/js/[name][hash].js'
    },module:{
        //seccion donde se pondra los cargadores

        rules:[{
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: '../'
                }
              },
              "css-loader"
            ]
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: '../'
                }
              },
              "css-loader","sass-loader"
            ]
          },
          // transpilacion de codigo a codigo legible por navegadores que soportan em2015
          { 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },
         //soporte de imagenes y fuentes
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
      //configuracion para videos
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
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "./src/css/[name].[hash].css",
        chunkFilename: "css/[id].[hash].css"
      })
    ],
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true,
        contentBase: './',
        port: 3000,
        inline: true
    },
  }
