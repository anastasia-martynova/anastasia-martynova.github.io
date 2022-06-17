const webpack = require("webpack");
module.exports = {
  entry: {
    "bundle": "./script.js",
    "bundle.min": "./script.js",
  },
  output: {
    filename: "minifiedScript.js"
  }
};