const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
    ...defaultConfig,
    entry: {
        'evw-block-01': './src/evw-block-01.js'
    },
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: '[name].js'
    }
};