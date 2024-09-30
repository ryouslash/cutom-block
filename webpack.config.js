const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // MiniCssExtractPluginの追加

module.exports = {
    ...defaultConfig,
    entry: {
        'heading': './src/js/heading.js',
        'evw-block-02': './src/evw-block-02.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: { // 複数のエントリポイントで共通のモジュールを別のファイルとして分離
            cacheGroups: {
                heading: {
                    test: /[\\/]heading\.(sc|sa|c)ss$/, //対象のファイル heading.scss
                    chunks: 'all',
                    enforce: true,
                    name: 'style-heading' //出力されるファイル名
                },
                style_02: {
                    test: /[\\/]style-02\.(sc|sa|c)ss$/, //対象のファイル style-02.scss
                    chunks: 'all',
                    enforce: true,
                    name: 'style-evw-block-02' //出力されるファイル名
                },
                default: false,
            },
        },
    },
};
