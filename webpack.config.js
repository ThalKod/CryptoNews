const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "developement";

let env;
if(process.env.NODE_ENV === "test"){
    env =  dotenv.config({ path: ".env.test" }).parsed;
}else if (process.env.NODE_ENV === "developement"){
    env =  dotenv.config({ path: ".env.developement" }).parsed;
}else if (process.env.config === "production"){
    env.API_KEY = "c8ef108467b646219b3b8c85488ab725";
}

module.exports = () =>{

    const isProduction =  env === "production";
 
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