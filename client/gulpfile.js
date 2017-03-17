'use strict';
var gulp =  require('gulp'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();

    gulp.task('default',function(callback){
      return runSequence('clear','build',['serve','watch'],callback);
    });
    gulp.task('clear',function(callback){
      return del(['dist/'], callback);
    });
    gulp.task('build',function(callback){
      return runSequence('copy','miniJs','minicss',callback);
    });
    gulp.task('copy',function(){
      return gulp.src('src/**/*.*')
        .pipe(gulp.dest('dist/'));
    });
    gulp.task('miniJs', function() {
       return gulp.src(['src/**/*.js','!src/assets/**/*.*'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
    });
    gulp.task('minicss',function(){
      return gulp.src('src/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
    });
    gulp.task('serve',function(){
       browserSync.init({
        server:{
          baseDir:'dist/'
        }
      })
    });
    gulp.task('watch',function(){
       gulp.watch('src/**/*.*',['reload']);
    });
    gulp.task('reload',function(callback){
       runSequence('build','reload-browser',callback);
    });
    gulp.task('reload-browser',function(){
        browserSync.reload();
    });