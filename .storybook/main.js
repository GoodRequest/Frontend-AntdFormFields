const path = require('path')

// const externals = {
//   "react": "react",
//   "react-dom": "react-dom",
// }

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        'storybook-tailwind-dark-mode',
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

      // config.module.externals.push({
      //   "react": {
      //         "commonjs": "react",
      //         "commonjs2": "react",
      //         "amd": "react",
      //         "root": "React"
      //       }
      // })

      // config.module.externals.push({
      //   "react-dom": {
      //         "commonjs": "react-dom",
      //         "commonjs2": "react-dom",
      //         "amd": "react-dom",
      //         "root": "ReactDOM"
      //       }
      // })

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
    },
    // externals
    // resolve: {
    //   alias: {
    //     react: path.resolve('../node_modules/react')
    //   }
    // },
    // "externals": {
    //   "react": {
    //     "commonjs": "react",
    //     "commonjs2": "react",
    //     "amd": "react",
    //     "root": "React"
    //   },
    //   "react-dom": {
    //     "commonjs": "react-dom",
    //     "commonjs2": "react-dom",
    //     "amd": "react-dom",
    //     "root": "ReactDOM"
    //   }
    // },
}