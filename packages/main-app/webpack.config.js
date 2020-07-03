const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  StorybookWebpackFederationPlugin,
} = require("storybook-webpack-federation-plugin");

const path = require("path");

module.exports = {
  entry: "./src/index",
  devServer: {
    historyApiFallback: true
},
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new StorybookWebpackFederationPlugin({
      remotes: ["shared_components"],
    }),
  ],
};