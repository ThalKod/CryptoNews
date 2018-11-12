const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "developement";

if(process.env.NODE_ENV === "test"){
    dotenv.config({ path: ".env.test" });
}else if (process.env.NODE_ENV === "developement"){
    dotenv.config({ path: ".env.developement" });
}

module.exports = () =>{

    const env = dotenv.config().parsed;


    const isProduction =  env === "production";
    const CSSExtract = new ExtractTextPlugin("style.css");
 
    return {
        entry:["babel-polyfill","./src/app.js"],
        output: {
            path: path.join(__dirname, "public"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }]
        },
        node: {
            fs: "empty"
         },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename:  "style.css", // devMode ? 'style.css' : 'style.[hash].css',
                chunkFilename: "[id].css"  // devMode ? '[id].css' : '[id].[hash].css',
              }),
              new webpack.DefinePlugin({
                  "process.env.API_KEY": JSON.stringify(`${env.API_KEY}`) 
              })
        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    };
}