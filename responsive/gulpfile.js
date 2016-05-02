var gulp = require('gulp');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compress', function() {
    gulp.src('lib/**/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('examples/js'));
});




// var uglify = require('gulp-uglify');
//
// gulp.task('compress', function() {
//     return gulp.src('lib/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });




gulp.task('default', ['compress']);