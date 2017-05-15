var gulp = require ("gulp");
var sqwish = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

/*Tarefa "minifica-css" minifica todos os arquivos .scss da pasta "scss" e depois joga ele para a pasta "dist/css"*/
gulp.task('minifica-css', function () {
  return gulp.src('./source/scss/*.scss') /*busca todos os arquivos .scss da pasta "source" */
    .pipe(sass({outputStyle: "compressed"})) /*minifica o(s) arquivo(s)*/
    .pipe(gulp.dest('./dist/css')); /*envia o arquivo minificado para a pasta "dist/css" */
});


/*Tarefa "minifica-html" minifica todos os arquivos .html da pasta "source" e depois joga ele para a pasta "dist"*/
gulp.task('minifica-html', function() {
  gulp.src('./source/*.html') /*busca todos os arquivos html da pasta source*/
    .pipe(htmlmin({collapseWhitespace: true})) /*minifica o(s) arquivo(s)*/
    .pipe(gulp.dest('./dist')) /*envia o arquivo minificado para a pasta "dist"*/
});


gulp.task ('background' , function(){ /*background usa função "watch" que 'escuta' qdo o arquivo é modificado (qdo é salvo)*/
	gulp.watch('./source/scss/*.scss',['minifica-css']); 
	gulp.watch('./source/index.html',['minifica-html']); /*qdo 'index.html' é modificado, o 'minifica-html' é executado*/
});


