
// Jest Configuration File

module.exports = {
    testEnvironment: "node",

    testMatch: [
        "**/*.test.js"
    ],

    collectCoverageFrom: [
        "calculator.js"
    ],

    coverageDirectory: "coverage",

    coverageReporters: [
        "text",
        "html"
    ],

    verbose: true,

    clearMocks: true
};
