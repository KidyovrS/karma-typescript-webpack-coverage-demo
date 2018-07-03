// this is the entry point for bundling tests

const tests = require.context('./', true, /Tests\.ts$/)

tests.keys().forEach(tests)
