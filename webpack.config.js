const path = require('path')
const webpack = require('webpack')


const NODE_ENV = process.env.NODE_ENV || 'development'
const isProd = NODE_ENV === 'production'


console.log('NODE ENV: ' + NODE_ENV);
module.exports = {
    mode: NODE_ENV,
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        library: 'ClockApp',
    },

    watch: !isProd,
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: isProd ? false : '#cheap-module-source-map',

    resolve: {
        extensions: ['.js'],
        alias: {
          'config': path.resolve(__dirname, './src/config.js') 
        }
    },

    plugins: [
        new webpack.ProvidePlugin({
          'config': 'config'
        })
    ],

    module: {
        rules: [
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                   presets: ["env"]
                }
            }],
            exclude: /node_modules/
        }
    ]},

    devServer : {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dist'
    }
};
