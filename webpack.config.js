const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = ({ mode }) => {
    return {
        mode,
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].[chunkhash].js'
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/, 
                    use: [
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options: {
                        //         hmr: mode === 'development',
                        //     },
                        // },
                        'style-loader',
                        'css-loader',
                        // 'postcss-loader',
                        // 'sass-loader',
                    ],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: ['dist']
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
        devtool: mode === 'development' ? 'source-map' : 'none'
    };
};