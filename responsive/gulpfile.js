var gulp = require('gulp');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('compress', function() {
    gulp.src('src/**/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('examples/js'));
});

gulp.task('watch', function(){
    gulp.watch('src/**/*.js', ['compress']);
});

gulp.task('webserver', function() {
    gulp.src('examples')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default', ['compress', 'watch',  'webserver']);