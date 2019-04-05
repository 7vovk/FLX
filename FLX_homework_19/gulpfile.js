const {src, dest, series, task, watch} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const scss = require('gulp-sass');
scss.compiler = require("node-sass");
const htmlmin = require('gulp-htmlmin');
const path = require('path');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const image = require('gulp-image');


let serverSync = () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
};

task('image', function () {
    return src('./src/img/*')
        .pipe(image())
        .pipe(dest('./dist/img'));
});

task('minify', () => {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});

task('scss', () => {
    return src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
});

task('js', () => {
    return src('./src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/js/'));
});

task('default', series('image', 'minify','scss', 'js'));

exports.serve = () => {
    serverSync();
    watch('./src/*.html', series('minify'));
    watch('./src/scss/*.scss', series('scss'));
    watch('./src/js/*.js', series('js'));
};