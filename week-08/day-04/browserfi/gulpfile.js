var gulp = require('gulp');
var gulpBrowser = require('gulp-browser');
var gulpRename = require("gulp-rename");
var jsmin = require('gulp-jsmin');
var sass = require('gulp-sass');

gulp.task('default', ['bundle-javascript', 'sass']);

gulp.task('bundle-javascript', function () {
  	gulp.src('./source/main.js')
  		.pipe(gulpBrowser.browserify())
  		.pipe(jsmin())
  		.pipe(gulpRename('build.js'))
  		.pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
		gulp.src('./source/sass/main.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./build/css/'))
})

gulp.watch('./source/main.js', ['bundle-javascript']);
gulp.watch('./source/sass/main.scss', ['sass'])