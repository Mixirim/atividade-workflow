var gulp = require ("gulp");
var sqwish = require('gulp-sqwish');
var htmlmin = require('gulp-html-minifier2');

/*Tarefa "minifica-css" minifica todos os arquivos .scss da pasta "scss" e depois joga ele para a pasta "dist/css"*/
gulp.task('minifica-css', function () {
  return gulp.src('./source/scss/*.scss') /*busca todos os arquivos .scss da pasta "source" */
    .pipe(sqwish()) /*minifica o(s) arquivo(s)*/
    .pipe(gulp.dest('./dist/css')); /*envia o arquivo minificado para a pasta "dist/css" */
});


/*Tarefa "minifica-html" minifica todos os arquivos .html da pasta "source" e depois joga ele para a pasta "dist"*/
gulp.task('minifica-html', function() {
  gulp.src('./source/*.html') /*busca todos os arquivos html da pasta source*/
    .pipe(htmlmin({collapseWhitespace: true})) /*minifica o(s) arquivo(s)*/
    .pipe(gulp.dest('./dist')) /*envia o arquivo minificado para a pasta "dist"*/
});


gulp.task ('background' , function(){ /*background usa função "watch" que 'escuta' qdo o arquivo é modificado (qdo é salvo)*/
	gulp.watch('./source/scss/base.scss',['minifica-css']); /*qdo 'base.scss' é modificado, o 'minifica-css' é executado*/
	gulp.watch('./source/scss/layout.scss',['minifica-css']); /*qdo 'layout.scss' é modificado, o 'minifica-css' é executado*/
	gulp.watch('./source/scss/style.scss',['minifica-css']); /*qdo 'style.scss' é modificado, o 'minifica-css' é executado*/
	gulp.watch('./source/index.html',['minifica-html']); /*qdo 'index.html' é modificado, o 'minifica-html' é executado*/
});


