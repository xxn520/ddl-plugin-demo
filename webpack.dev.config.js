const path = require('path')
const webpack = require('webpack')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/'
    },
    entry: [
    	'./src/index.js',
        'webpack/hot/only-dev-server'
    ],
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./vendor/reactVendor-manifest.json'),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
      	new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        publicPath: '/build/'
    }
};
