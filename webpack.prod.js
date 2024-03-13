const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ parallel: true })
        ]
    }
});
