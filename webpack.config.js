const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
    ...defaultConfig,
    entry: {
      'evw-block-01': './src/evw-block-01.js',
      'evw-block-02': './src/evw-block-02.js'
    },
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: '[name].js'
    },
    optimization: {
      splitChunks: { //複数のエントリポイントで共通のモジュールを別のファイルとして分離
        cacheGroups: {
          style_01: {
            test: /[\\/]style-01\.(sc|sa|c)ss$/, //対象のファイル style-01.scss
            chunks: 'all',
            enforce: true,
            name: 'style-evw-block-01' //出力されるファイル名
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