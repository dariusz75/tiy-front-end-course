var gulp = require('gulp');
var gulpBrowser = require('gulp-browser');
var gulpRename = require("gulp-rename");


gulp.task('bundle-javascript', function () {
  	gulp.src('./source/main.js')
  		.pipe(gulpBrowser.browserify())
  		.pipe(gulpRename('build.js'))
  		.pipe(gulp.dest('./build/'));
});