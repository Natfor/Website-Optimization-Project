/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
		cleanCSS = require('gulp-clean-css');
		uglify = require('gulp-uglify');

//create a default task and just log a message
gulp.task('default', function(){
	return gutil.log('Gulp is running');
})

gulp.task('minify-css', function(){
	return gulp.src('css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('css/build'));
});

gulp.task('minify-js', function(){
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('js/build'));
});