module.exports = function(config) {
  config.set({
    frameworks: ["mocha"],
    files: ["test/bundle.js"],
    reporters: ["mocha", "coverage-istanbul"],
    coverageIstanbulReporter: {
      reports: ["html", "json-summary"],
      combineBrowserReports: true,
      fixWebpackSourcePaths: true
    },
    browsers: ["Chrome"],
    singleRun: true
  });
};
