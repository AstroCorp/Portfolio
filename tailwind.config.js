const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    ...colors.gray,
                    'extra': '#b1b3b6',
                },
            },
        },
    },
    variants: {},
    plugins: [],
}
