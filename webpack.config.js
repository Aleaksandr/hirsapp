var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
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
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new ExtractTextPlugin('../css/[name].css')
        ],
        watch: true
    };

    if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                compress: {
                    sequences     : true,
                    booleans      : true,
                    loops         : true,
                    unused      : true,
                    warnings    : false,
                    drop_console: true,
                    unsafe      : true
                }
            })
        );
    } else {
        config.devtool = "#cheap-module-source-map";
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        );
    }

module.exports = config;
