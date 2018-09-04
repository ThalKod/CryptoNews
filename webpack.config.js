const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "developement";

if(process.env.NODE_ENV === "test"){
    require("dotenv").config({ path: ".env.test" });
}else if (process.env.NODE_ENV === "developement"){
    require("dotenv").config({ path: ".env.developement" });
}

module.exports = (env)=>{
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
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename:  "style.css", // devMode ? 'style.css' : 'style.[hash].css',
                chunkFilename: "[id].css"  // devMode ? '[id].css' : '[id].[hash].css',
              }),
              new webpack.DefinePlugin({
                  "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY), 
                  "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN), 
                  "process.env.FIREBASE_DATABASE": JSON.stringify(process.env.FIREBASE_DATABASE), 
                  "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET), 
                  "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID), 
                  "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID) 
              })

        ],
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    };
}