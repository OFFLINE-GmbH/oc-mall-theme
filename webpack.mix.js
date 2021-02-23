const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


mix.js('resources/js/app.js', 'assets');
mix.sass('resources/scss/main.scss', 'assets')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss ],
    })

mix.browserSync({
    proxy: 'http://127.0.0.1:8000/', //replace with your App URL
    files: [
        'layouts/**/*.htm',
        'pages/**/*.htm',
        'partials/**/*.htm',
        'assets/app.js',
        'assets/main.css',
        'resources/scss/**/*.scss',
    ],
});
