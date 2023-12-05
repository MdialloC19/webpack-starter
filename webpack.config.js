const path =require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports= {
    mode: 'development',
    entry: './src/index.js',
    output:{
       path: path.resolve(__dirname,'dist'),
       filename: 'bundle.js'
    },
    module :{
        rules:[
            { 
                test: /\.css$/, 
                use:[MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins:[
        new HTMLWebpackPlugin({
            title :'Webpack Starter',
            filename:'index.html',
            template:'./src/index.html',
        }),
        new MiniCssExtractPlugin(),
        ,
    ]






}