var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('default', function () {
  console.log('Running a default task!');
});

gulp.task('bundle-javascript', function () {
  console.log('Running a default task!');
  return browserify('./source/main.js')
  		 .bundle();
});