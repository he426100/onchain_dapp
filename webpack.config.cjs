// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';
console.log("id dev: "+isDev);
/// 
module.exports = {
    entry: './src/index.js', // Your main JavaScript file
    output: {
        path: path.resolve(__dirname, 'docs'),
        publicPath: isDev ? "/" : '/onchain_dapp/',
        filename: 'bundle.js',
        chunkFilename: 'js/chunks/[name].bundle.js',
    },
    optimization: {
        minimize:isDev?false: true // ⛔ disables minification
    },
    experiments: {
        asyncWebAssembly: true, // Enable support for .wasm files
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Match CSS files
                use: ["style-loader", "css-loader"], // Loaders to process CSS
            },
            {
                test: /node_modules\/filsnap-adapter\/.*\.js$/,
                resolve: {
                    fullySpecified: false
                }
            }
        ],
    },
    resolve: {
        alias: {
            // Provide a fallback for the missing RetryError export
            'iso-web/http': path.resolve(__dirname, 'webpack-shims/iso-web-http.js'),
        },
        fallback: {
            buffer: require.resolve('buffer/'),
            url: require.resolve('url/'),
            util: require.resolve('util/'),
            path: require.resolve('path-browserify'),
            stream: require.resolve('stream-browserify'),
            zlib: require.resolve('browserify-zlib'),
            assert: require.resolve('assert/'),
            "crypto": false
            // Add other Node.js core modules here as needed
        },
        extensions: [".js", ".jsx", ".css",".wasm"], // Ensure Webpack recognizes CSS files
        extensionAlias: {
            ".js": [".ts", ".js"],
            ".mjs": [".mts", ".mjs"]
        }

    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          }),
    ],
    mode: 'development',
    devtool: 'source-map'
};
