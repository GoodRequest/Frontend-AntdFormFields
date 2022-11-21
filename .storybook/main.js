const path = require('path')

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
          name: '@storybook/addon-postcss',
          options: {
            postcssLoaderOptions: {
              implementation: require('postcss'),
            },
          },
        },
    ],
    webpackFinal: async (config) => {
      config.module.rules.push({
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      })
  
      return config
    },
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    }
}