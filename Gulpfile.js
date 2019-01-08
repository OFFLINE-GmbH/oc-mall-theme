var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify'),
    plumber = require('gulp-plumber'),
    source = require('vinyl-source-stream'),
    streamify = require('gulp-streamify'),
    nano = require('gulp-cssnano'),
    util = require('gulp-util'),
    tailwindcss = require('tailwindcss');

var browserSync = require('browser-sync').create();

var paths = {
    cssSource: 'resources/scss/',
    jsSource: 'resources/js/',
    destination: 'assets/'
};

gulp.task('styles', function () {
    return gulp.src(paths.cssSource + 'main.scss')
        .pipe(plumber())
        .pipe(util.env.production ? sourcemaps.init() : util.noop())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('tailwind.js'),
            require('autoprefixer'),
            require('cssnano')
        ]))
        .pipe(util.env.production ? nano({autoprefixer: false}) : util.noop())
        .pipe(util.env.production ? sourcemaps.write('./') : util.noop())
        .pipe(gulp.dest(paths.destination))
        .pipe(util.env.production ? util.noop() : browserSync.stream({match: '**/*.css'}));
});

gulp.task('scripts', function () {
    return browserify(paths.jsSource + 'app.js')
        .transform(babelify, {presets: ["es2015"]})
        .bundle()
        .on('error', function (e) {
            console.log(e.message);

            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(util.env.production ? streamify(uglify()) : util.noop())
        .pipe(gulp.dest(paths.destination));
});

gulp.watch(paths.cssSource + '**/*.scss', gulp.parallel('styles'));
gulp.task('default', gulp.parallel('styles', 'scripts'));