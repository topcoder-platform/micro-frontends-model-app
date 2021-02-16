
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");

const cssLocalIdent = "sr_[path][name]___[local]";

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "topcoder",
    projectName: "micro-frontends-model-app",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: {
      "@topcoder/micro-frontends-navbar-app":
        "@topcoder/micro-frontends-navbar-app",
    },
    module: {
      rules: [
        {
          // Loads SCSS stylesheets.
          test: /\.scss/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: cssLocalIdent,
                  auto: true,
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [autoprefixer],
                },
              },
            },
            "resolve-url-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          exclude: [/node_modules/],
          use: {
            loader: require.resolve("file-loader", { paths: [__dirname] }),
          }
        },
        {
          test: /\.mdx?$/,
          use: ["babel-loader", "@mdx-js/loader"],
        },
        {
          test: /\.yaml$/,
          use: 'js-yaml-loader',
        },
      ],
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        constants: path.resolve(__dirname, "src/constants"),
        pages: path.resolve(__dirname, "src/pages"),
        styles: path.resolve(__dirname, "src/styles")
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          APPENV: JSON.stringify(process.env.APPENV),
        },
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  });
};
