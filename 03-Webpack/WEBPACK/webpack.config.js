import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    entry: {
      app:"./src/controller.ts",
  
    },
    output: {
      filename: "[name].[chunkhash].js",
      clean: true,
  },   
  module: {
    rules: [
      {
          test: /\.ts$/,
          exclude:/node_modules/,
          loader: 'babel-loader'         
      },
       {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,     
            "css-loader",   
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
        {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
           {
        test: /\.html$/,
        loader: "html-loader",
      },
 
    ],
      
    
},
 
  plugins: [
      new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "./src/index.html", //Name of template in ./src
      scriptLoading: "blocking", // Just use the blocking approach (no modern defer or module)
    }),
      new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),
      ],
};