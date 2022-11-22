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
    "staticDirs": ['../dist/assets/fonts'],
    webpackFinal: async (config) => {

      config.module.rules.push({
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      })

      config.module.rules = [
        ...config.module.rules.map(rule => {
          if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg$/ }
          }
      
          return rule
        }),
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        }
      ]
      
      return config
    },
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    }
}