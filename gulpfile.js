"use strict";
require('babel-core/register');

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    watch = require('gulp-watch');

var config = {
    watch: {
        src: './src/*.js',
    },
    test: {
        path: {
            specs: './test/specs/*-spec.js',
        },
        mocha: {
            reporter: 'spec'
        }
    }
};


gulp.task('test', ['watch'], function () {
    process.env.PORT = 8000;
    return gulp.src(['test/**/*-spec.js'], {read: false})
        .pipe(mocha({
            reporter: config.test.mocha.reporter,
            ui: 'bdd'
        }))
});


gulp.task('watch', function() {
    gulp.watch('src/**/*-spec.js', ['test']);
});


