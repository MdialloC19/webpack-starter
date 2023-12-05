const path =require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
                use:['style-loader', 'css-loader'],
            },
        ],
    },
    //  plugin :{

    //     // new MiniCssExtractPlugin();
    //  }





}