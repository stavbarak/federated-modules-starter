const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  StorybookWebpackFederationPlugin,
} = require("storybook-webpack-federation-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


const path = require("path");

module.exports = {
  entry: "./src/index",
  watch: true,
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
      shared: ["react", "react-dom","react-router-dom"]
    }),

    // new ModuleFederationPlugin({
    //   name: "main_app",
    //   library: { type: "var", name: "main_app" },
    //   filename: "remoteEntry.js",
    //   remotes: {
    //     shared_components: "shared_components",
    //   },
    //   exposes: {
    //     'AppContainer':'./src/App'
    //   },
    //   shared: {
    //     "react": {
    //       singleton: true
    //     },
    //     "react-dom": "^16.12.0",
    //     "@material-ui/core": {
    //       singleton: true
    //     }
    //   }
    // }),
  ],
};