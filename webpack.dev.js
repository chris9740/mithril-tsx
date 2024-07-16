const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        hot: true,
        port: 5051,
        open: true,
        static: "public",
        historyApiFallback: {
            index: "index.html"
        }
    }
});
