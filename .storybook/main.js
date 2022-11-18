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
        "@storybook/preset-scss"
    ],
    // "sassOptions": {
    //     "includePaths": [path.join(__dirname, '../src/styles')]
    // },
    //  "plugins": [require("postcss-import"), require("tailwindcss"), require("autoprefixer")],
    // webpackFinal: async (config) => {
        // config.module.rules.push({
        //     test: /\.s[ac]ss$/i,
        //     include: path.resolve(__dirname, '../'),
        // })

        // config.module.rules.push({
        //     test: /\.s[ac]ss$/i,
        //     use: [
        //         "style-loader",
        //         "css-loader",
        //         'postcss-loader',
        //         {
        //             loader: "sass-loader",
        //             options: {
        //                 // Prefer `dart-sass`
        //                 implementation: require.resolve("sass"),
        //             }
        //         }
        //     ],
        //     include: path.resolve(__dirname, "../")
        // })

        // config.module.rules.push({
        //     test: /\,css$/,
        //     use: [
        //         {
        //             loader: 'postcss-loader',
        //             options: {
        //                 ident: 'postcss',
        //                 plugins: [
        //                     require('tailwindcss'),
        //                     require('autoprefixer'),
        //                     // require('postcss-import')
        //                 ]
        //             }
        //         }
        //     ],
        //     include: path.resolve(__dirname, '../')
        // })

        // return config
    // },
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    }
}

// {
//     name: '@storybook/preset-scss',
//     options: {
//         cssLoaderOptions: {
//             modules: true,
//         }
//     }
// }

// config.module.rules.map((rule) => {
//     if (rule.oneOf) {
//         rule.oneOf = rule.oneOf.slice().map((subRule) => {
//         if (subRule.test instanceof RegExp && subRule.test.test('.sass')) {
//             return {
//                 ...subRule,
//                 use: [
//                     ...subRule.use,
//                     {
//                         loader: require.resolve('sass-resources-loader'),
//                         options: {
//                             resources: [
//                                 path.resolve(__dirname, '../src/styles/global.sass')
//                             ]
//                         }
//                     }
//                 ],
//             }
//         }
//         return subRule
//         })
//     }
//     return rule
// })
// config.module.rules.push({
//     test: /\.sass$/,
//     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
// })

// config.module.rules.push({
//     test: /\.scss$/,
//     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
// })

// config.module.rules.push({
//     test: /\.s[ac]ss$/i,
//     use: [
//         "style-loader",
//         "css-loader",
//         {
//             loader: "sass-loader",
//             options: {
//                 // Prefer `dart-sass`
//                 implementation: require.resolve("sass"),
//                 sassOptions: {
//                     fiber: false,
//                 },
//             }
//         }
//     ]
// })

// config.module.rules[ruleCssIndex].use.map((item) => {
//     if (item.loader && item.loader.includes("/css-loader/")) {
//         item.options.modules = {
//         mode: "local",
//         localIdentName:
//             configType === "PRODUCTION"
//                 ? "[local]__[hash:base64:5]"
//                 : "[name]__[local]__[hash:base64:5]",
//         }
//     }

//     return item;
// })

// webpackFinal: async (config) => {
//     config.module.rules.push({
//         test: /\.sass$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//         include: path.resolve(__dirname, '../'),
//       })

//       return config;
// },