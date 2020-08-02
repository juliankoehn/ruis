const path = require('path')

module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/preset-typescript',
            options: {
                tsLoaderOptions: {
                    configFile: path.resolve(__dirname, '../tsconfig.json'),
                },
                forkTsCheckerWebpackPluginOptions: {
                    colors: false, // disables built-in colors in logger messages
                },
                include: [path.resolve(__dirname, '../src')],
                transpileManager: true,
            }
        },
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register'
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.
        config.module.rules.push({
            test: /\.(js|ts)x?$/,
            exclude: /node_modules/,
            use: [
                require.resolve('babel-loader'),
                require.resolve('react-docgen-typescript-loader'),
            ],
        });
        return config
    },
};