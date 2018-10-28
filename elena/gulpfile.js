const
  gulp                       = require('gulp'),
  sass                       = require('gulp-sass'),
  watch                     = require('gulp-watch'),
  autoprefixer            = require('gulp-autoprefixer'),
  cssmin                    = require('gulp-cssmin'),
  rename                   = require('gulp-rename');

  gulp.task('default', function () {
    gulp.watch('./src/**/**/*.css', ['min', 'autoprefixer']);
    gulp.watch('./src/**/**/*.html', ['html']);
  });

gulp.task('autoprefixer', () =>
    gulp.src('dist/css/main.css', 'dist/css/media.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'))
);

gulp.task('min', function () {
    gulp.src('src/main.css', 'src/media.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
