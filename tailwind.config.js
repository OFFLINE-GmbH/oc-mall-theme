/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
    'transparent': 'transparent',

    'primary': '#103d60',
    'primary-light': '#144b76',
    'secondary': '#ef7204',
    'secondary-light': '#ef5c12',

    'black': '#222b2f',
    'grey-darkest': '#364349',
    'grey-darker': '#596a73',
    'grey-dark': '#70818a',
    'grey': '#9babb4',
    'grey-light': '#dae4e9',
    'grey-lighter': '#f3f7f9',
    'grey-lightest': '#fafcfc',
    'smoke-dark': '#ccd6db',
    'smoke': '#dae4e9',
    'smoke-light': '#f1f6f8',
    'smoke-lightest': '#f6fbfd',
    'white': '#ffffff',

    'red-darkest': '#420806',
    'red-dark': '#cc1f1a',
    'red': '#e3342f',
    'red-light': '#ef5753',
    'red-lightest': '#fcebea',

    'orange-darkest': '#542605',
    'orange-light': '#faad63',
    'orange-lightest': '#fff5eb',

    'yellow-darkest': '#453411',
    'yellow-lightest': '#fcfbeb',

    'blue-darker': '#103d60',
    'blue-dark': '#2779bd',
    'blue': '#3490dc',

}


module.exports = {
    purge: {
        content: [
            './layouts/**/*.htm',
            './pages/**/*.htm',
            './partials/**/*.htm'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: colors,
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '0rem',
                lg: '2rem',
                xl: '6rem',
                '2xl': '11rem',
            },
        },
        extend: {
            fontSize: {
                '2xs': '.65rem',    // 10px
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

