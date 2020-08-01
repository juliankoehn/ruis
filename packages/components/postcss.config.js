const path = require('path');

module.exports = () => ({
    plugins: {
        'postcss-import': {
            path: [path.resolve(__dirname, './src/styles')]
        },
        'postcss-url': {},
        'postcss-preset-env': {
            stage: 0,
            browsers: 'last 2 versions, ie >= 11',
            preserve: false
        }
    },
});