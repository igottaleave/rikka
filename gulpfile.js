var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	jade = require('gulp-jade'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	tinylr = require('tiny-lr'),
	express = require('express'),
	app = express(),
	marked = require('marked'), // For :markdown filter in jade
	path = require('path'),
	server = tinylr();


gulp.task('css', function () {
	return gulp.src('styles/*.css')
		.pipe(uglify())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/styles/'))
		.pipe(livereload(server));
});

gulp.task('js', function () {
	return gulp.src('js/*.js')
		// .pipe(uglify())
		// .pipe(concat('all.min.js'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(livereload(server));
});

gulp.task('templates', function () {
	return gulp.src('*.jade')
		.pipe(jade({pretty: true}))
		.pipe(gulp.dest('dist/'))
		.pipe(livereload(server));
});

gulp.task('images', function () {
	return gulp.src('*.png')
		.pipe(gulp.dest('dist/'))
		.pipe(livereload(server));
});

gulp.task('express', function () {
	app.use(require('connect-livereload')());
	app.use(express.static(path.resolve('./dist')));
	app.listen(1337);
	gutil.log('Listening on port: 1337');
});

gulp.task('watch', function () {
	server.listen(35729, function (err) {
		if (err) return console.log(err);
	});
	gulp.watch('styles/*.styl', ['css']);

	gulp.watch('js/*.js', ['js']);

	gulp.watch('styles/*.css', ['css']);

	gulp.watch('*.jade', ['templates']);

});

// Default Task
gulp.task('default', ['js', 'css', 'templates', 'express', 'images', 'watch']);