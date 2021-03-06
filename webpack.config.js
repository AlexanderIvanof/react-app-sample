const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
   template: "./src/index.html",
   filename: "./index.html"
});

const cleanUpPlugin = new CleanWebpackPlugin(
    ["dist"],
    {
        root: __dirname,
        verbose: true,
        dry: false,
        exclude: []
    }
);

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "myapp.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin, cleanUpPlugin]
};