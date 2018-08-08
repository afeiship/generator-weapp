(function () {

  'use strict';

  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //clean
  gulp.task('clean', function () {
    return $.del('dist');
  });

  gulp.task('copy', function () {
    return gulp.src(['src/*.*', '!src/index.scss'])
      .pipe(gulp.dest('dist'));
  })

  gulp.task('styles', function () {
    return gulp.src('src/*.scss')
      .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
      .pipe($.rename({ extname: '.wxss' }))
      .pipe(gulp.dest('dist'));
  });


  gulp.task('default', ['clean'], function () {
    gulp.start(['styles', 'copy']);
  });

}());
