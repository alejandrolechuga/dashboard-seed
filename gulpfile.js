'use strict';

var gulp       = require('gulp');
var browserify = require('browserify');
var concat     = require('gulp-concat');
var source     = require('vinyl-source-stream');

gulp.task('browserify', function() {
 // Browserify/bundle the JS.
  return browserify('src/app.js', {debug: true})
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('dev', ['browserify']);