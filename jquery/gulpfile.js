var gulp = require('gulp');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('compress', function() {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({
            basename: "utils",
            suffix: '.min',
            extname: ".js"
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('examples/js'));
});

gulp.task('watch', function(){
    gulp.watch('src/*.js', ['compress']);
});

gulp.task('default', ['compress', 'watch']);