const { join, resolve } = require('path');

module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'auto-ngtemplate-loader']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ngtemplate-loader',
                        options: {
                            relativeTo: resolve('./examples')
                        }
                    },
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        alias: {
            'auto-ngtemplate-loader': join(__dirname, './index.js')
        }
    },
    stats: {
        colors: true
    }
};
