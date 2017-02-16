const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        reactVendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'vendor'),
        filename: "[name].js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'vendor', '[name]-manifest.json'),
            name: "[name]_[hash]",
            context: __dirname
        })
    ]
};