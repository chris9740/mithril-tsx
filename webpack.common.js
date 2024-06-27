const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const SyntaxJsxPlugin = require("@babel/plugin-syntax-jsx");

module.exports = {
    entry: ["./src/main.ts", "./src/assets/styles.css"],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/[name].[ext]",
                },
            },
            {
                test: /\.(ts|tsx)$/,
                use: ["babel-loader", { loader: "ts-loader" }],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css/,
                use: [
                    { loader: "style-loader" },
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    "[name]__[local]___[hash:base64:5]",
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".tsx", ".css"],
    },
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist"),
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "public" }],
        }),
        new webpack.ProvidePlugin({
            m: "mithril",
        }),
    ],
};
