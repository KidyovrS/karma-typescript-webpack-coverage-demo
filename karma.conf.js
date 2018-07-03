module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'test/index.js'
    ],
    preprocessors: {
      'test/index.js': 'webpack'
    },
    webpack: require('./webpack.config.karma.js'),
    reporters: ['mocha', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'json-summary'],
      combineBrowserReports: true,
      fixWebpackSourcePaths: true
    },
    browsers: ['Chrome'],
    singleRun: true
  })
}
