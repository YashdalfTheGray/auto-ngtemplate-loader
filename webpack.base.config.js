module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    stats: {
        colors: true
    }
};
