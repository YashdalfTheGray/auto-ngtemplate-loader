const { join } = require('path');

module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader', 'auto-ngtemplate-loader'],
                exclude: /node_modules/
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
