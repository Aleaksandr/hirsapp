var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src/main/frontend/react'),
    entry: {
        main: './main',
        login: './login'
    },
    output: {
        path: path.join(__dirname, 'src/main/resources/static/js'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test:/\.scss$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader'})
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],
    watch: true
};
