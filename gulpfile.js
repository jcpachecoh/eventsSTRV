var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('src/styling/**/*.s+(a|c)ss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('src/styling/**/*.s+(a|c)ss', ['sass']);
    return gulp.src('src/styling/**/*.s+(a|c)ss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});