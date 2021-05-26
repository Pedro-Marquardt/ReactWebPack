'use strict'

const path = require('path') 
const { webpack } = require('webpack')

module.exports = {
    devtool: 'source-map',


    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        path.join(__dirname,'src', 'index')
    ],

    output: {
        path: path.join(__dirname,'dist'),
        filename: 'budle.js',
        publicPath:'/dist/'
    },
    
    module:{
        loaders:[{
            teste:/\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }

}