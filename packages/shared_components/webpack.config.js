const path = require("path");
const {
  StorybookWebpackFederationPlugin,
} = require("storybook-webpack-federation-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
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

  output: {
    // location of where the compiled Storybook lives
    path: path.resolve(__dirname, "storybook-static/federation"),
    // the url where Storybook will be accessible from
    publicPath: "//localhost:3030/federation/",
  },

  plugins: [
    new StorybookWebpackFederationPlugin({
      name: "shared_components", // this will be used by the consuming federation host
      files: {
        // paths to the components
        paths: ["./src/**/*.ts{,x}"],
      },
      shared: ["react", "react-dom","react-router-dom"]
    }),
    // new ModuleFederationPlugin({
    //   name: "shared_components",
    //   library: { type: "var", name: "shared_components" },
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     Dialog: "./src/Dialog",
    //     Button: "./src/Button"
    //   },
    //
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
