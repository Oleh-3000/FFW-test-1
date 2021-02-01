let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function(){
	return gulp.src('dev/scss/**/*.scss')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//compressed,expanded           
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('dev/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scss', function(){
	return gulp.src('dev/scss/**/*.scss')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//compressed,expanded						
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('dev/css'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('html', function(){
	return gulp.src('dev/*.html')
		/*
			.pipe(fileinclude({
				prefix: '@@',
				basepath: '@file'
			}))
			.pipe(gulp.dest('dev'))
			 */
		.pipe(browserSync.reload({stream: true}))

});

gulp.task('script', function(){
	return gulp.src('dev/js/*.js')
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('export', function(){
	let buildHtml = gulp.src('dev/*.html')
		.pipe(gulp.dest('dist'));

	let BuildCss = gulp.src('dev/css/**/*.css')
		.pipe(gulp.dest('dist/css'));

	let BuildJs = gulp.src('dev/js/**/*.js')
		.pipe(gulp.dest('dist/js'));

	let BuildFonts = gulp.src('dev/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'));

	let BuildImg = gulp.src('dev/img/**/*.*')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "dev/"
		}
	});
});




gulp.task('watch', function(){
	gulp.watch('dev/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('dev/*.html', gulp.parallel('html'));
	gulp.watch('dev/js/*.js', gulp.parallel('script'));
});

gulp.task('build', gulp.series('export'))
gulp.task('default', gulp.parallel('scss', 'script', 'browser-sync','watch'))
