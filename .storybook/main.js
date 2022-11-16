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
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\,css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [
                            require('tailwindcss'),
                            require('autoprefixer')
                        ]
                    }
                }
            ],
            include: path.resolve(__dirname, '../')
        })
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
        return config
    },
    // webpackFinal: async (config) => {
    //     config.module.rules.push({
    //         test: /\.sass$/,
    //         use: ['style-loader', 'css-loader', 'sass-loader'],
    //         include: path.resolve(__dirname, '../'),
    //       })
    
    //       return config;
    // },
    "framework": "@storybook/react",
    "core": {
        "builder": "@storybook/builder-webpack5"
    }
}