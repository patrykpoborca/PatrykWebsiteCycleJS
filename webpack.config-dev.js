'use strict';
var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: './view/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        },
        {test: /\.css$/, loaders: ['css']}]
    }
};


//
//module.exports = {
//
//    context : path.join(__dirname),
//    entry:{
//        'my-app' : './view/app.js'
//    },
//
//    output: {
//
//        path: __dirname,
//
//        // Filename of an entry chunk http://webpack.github.io/docs/configuration.html#output-filename
//        filename: "bundle.js",
//
//        // Web path (used to prefix URLs) http://webpack.github.io/docs/configuration.html#output-publicpath
//        publicPath: "http://localhost:8080/",
//
//        // ??? http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
//        sourceMapFilename: "debugging/[file].map",
//
//        // Include pathinfo in output (like `require(/*./test*/23)`) http://webpack.github.io/docs/configuration.html#output-pathinfo
//        pathinfo: true
//
//    },
//
//    devtool: 'source-map',
//    debug : true,
//
//    profile: true,
//
//    // Module http://webpack.github.io/docs/configuration.html#module
//    module: {
//        loaders: [ // http://webpack.github.io/docs/loaders.html
//            // JS
//            {test: /\.js$/, loaders: ["babel?stage=0"], exclude: /node_modules/},
//        ],
//    },
//
//    // Module resolving http://webpack.github.io/docs/configuration.html#resolve
//    resolve: {
//        // node_modules and like that
//        modulesDirectories: ["web_modules", "node_modules"],
//    },
//
//    // Loader resolving http://webpack.github.io/docs/configuration.html#resolveloader
//    resolveLoader: {
//        // Abs. path with loaders
//        root: path.join(__dirname, "/node_modules"),
//
//        alias: {},
//    },
//
//    // Plugins http://webpack.github.io/docs/list-of-plugins.html
//    plugins: [
//        new webpack.IgnorePlugin(/^vertx$/),
//        new webpack.NoErrorsPlugin(),
//        new webpack.ProvidePlugin({h: "virtual-dom/h"})
//    ]
//
//}
