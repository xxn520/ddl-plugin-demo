const webpack = require('webpack');

module.exports = {
    output: {
        path: 'build',
        filename: '[name].js',
    },
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor/reactVendor-manifest.json'),
        }),
    ],
};
