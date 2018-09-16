const gulp = require('gulp');
const cssminify = require('gulp-clean-css');
const jsminify = require('gulp-uglify');

//Function to minify CSS files
gulp.task('minify-css', function() {
    gulp.src('css/*.css')
        .pipe(cssminify())
        .pipe(gulp.dest('pub/css'))
});

//Function to minify JavaScript files
gulp.task('minify-js', function() {
    gulp.src('js/*.js')
        .pipe(jsminify())
        .pipe(gulp.dest('pub/js'))
});

//Function to watch out for changes and update files accordingly
gulp.task('watch', function() {
    gulp.watch(['css/*.css', 'js/*.js'], ['minify-css', 'minify-js']);
});

gulp.task('default', ['watch'], function() {
    console.log('Gulp is watching your files.');
})