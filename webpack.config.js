const path = require('path')
const webpack = require('webpack')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    entry: [
    	'./src/index.js'
    ],
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor/reactVendor-manifest.json'),
        })
    ]
};
