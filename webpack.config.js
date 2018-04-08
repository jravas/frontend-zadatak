const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/bundles/homepage.js',
    output: {
        path: path.resolve(__dirname, 'public/js/bundles'),
        publicPath: 'js/bundles/',
        filename: '[name].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules:[
            {
                test:/\.(s*)css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    }
};
