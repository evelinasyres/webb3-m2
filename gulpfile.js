const gulp = require('gulp');
const cssminify = require('gulp-clean-css');
const jsminify = require('gulp-uglify');
const concat = require('gulp-concat');

//Function to concat and minify CSS files
gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cssminify())
        .pipe(gulp.dest('pub/css/'))
});

//Function to concat and minify JavaScript files
gulp.task('minify-js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(jsminify())
        .pipe(gulp.dest('pub/js'))
});

//Function to update HTML files
gulp.task('update-html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('pub/'))
});

//Function to update image files
gulp.task('update-images', function() {
    gulp.src(['src/images/*.*'])
        .pipe(gulp.dest('pub/images'))
});

//Function to watch out for changes and update files accordingly
gulp.task('watch', function() {
    gulp.watch(['src/css/*.css', 'src/js/*.js', 'src/*.html', 'src/images/*.*'], ['minify-css', 'minify-js', 'update-html', 'update-images']);
});

//Function that runs when Gulp is initialised
gulp.task('default', ['watch', 'minify-css', 'minify-js', 'update-html', 'update-images'], function() {
    console.log('Gulp is watching your files.');
})