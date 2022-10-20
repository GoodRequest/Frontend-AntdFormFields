module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-addon-sass-postcss",
        {
            name: 'storybook-addon-sass-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                },
                sassLoaderOptions: {
                    implementation: require('sass')
                },
                loadSassAfterPostCSS: true
            }
        }
    ],
    "framework": "@storybook/react"
}