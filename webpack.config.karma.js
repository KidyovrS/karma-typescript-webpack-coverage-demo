const path = require("path");

module.exports = {
  entry: "./test/index.js",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "istanbul-instrumenter-loader",
        options: { esModules: true },
        exclude: [
          /node_modules/,
          /[\\/]test[\\/]/ // exclude test codes from coverage
        ],
        enforce: "post"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "test"),
    filename: "bundle.js"
  }
};
