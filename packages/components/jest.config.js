module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        './src/setupTests.ts'
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/dist-storybook/",
        "<rootDir>/.storybook/"
    ]
};