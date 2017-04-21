var gulp = require ("gulp");
var sqwish = require('gulp-sqwish');

gulp.task('move-css', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(gulp.dest('./dist/css'));
});


 
gulp.task('css', function () {
  return gulp.src('./source/scss/*.scss')
    .pipe(sqwish())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task ('background' , function(){
	gulp.watch('./source/scss/base.scss',['css','move-css']);
	gulp.watch('./source/scss/layout.scss',['css','move-css']);
	gulp.watch('./source/scss/style.scss',['css','move-css']);
});