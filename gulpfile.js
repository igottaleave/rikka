var gulp = require('gulp'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	pug = require('gulp-pug'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	express = require('express'),
	app = express(),
	// marked = require('marked'), // For :markdown filter in pug
	path = require('path');

livereload({ start: true });

gulp.task('css', function () {
	return gulp.src('styles/*.css')
		.pipe(concat('main.css'))
		.pipe(gulp.dest('dist/styles/'))
		.pipe(livereload());
});

gulp.task('js', function () {
	return gulp.src('js/*.js')
		.pipe(uglify())
		// .pipe(concat('all.min.js'))
		.pipe(gulp.dest('dist/js/'))
		.pipe(livereload());
});

gulp.task('templates', function () {
	return gulp.src('*.pug')
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest('dist/'))
		.pipe(livereload());
});

gulp.task('images', function () {
	return gulp.src('*.png')
		.pipe(gulp.dest('dist/'))
		.pipe(livereload());
});

gulp.task('svg', function () {
	return gulp.src('svg/*.svg')
		.pipe(gulp.dest('dist/svg/'))
		.pipe(livereload());
});


gulp.task('express', function () {
	app.use(require('connect-livereload')());
	app.use(express.static(path.resolve('./dist')));
	app.listen(1337);
	gutil.log('Listening on port: 1337');
});

gulp.task('watch', function () {
	gulp.watch('styles/*.styl', ['css']);

	gulp.watch('js/*.js', ['js']);

	gulp.watch('styles/*.css', ['css']);

	gulp.watch('*.pug', ['templates']);
	
	gulp.watch('svg/*.svg', ['svg']);
});

// Default Task
gulp.task('default', ['js', 'css', 'templates', 'express', 'images', 'svg', 'watch']);