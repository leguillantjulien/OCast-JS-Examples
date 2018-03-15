'use strict';

var serveStatic = require('serve-static');
var gulp = require('gulp-help')(require('gulp'));
var p = require('./package.json');
var npmDist = require('gulp-npm-dist');
var rename = require('gulp-rename');
var del = require('del');
var argv = require('yargs').argv;
var replace = require('gulp-replace');
var gulpif = require('gulp-if');
var runSequence = require('run-sequence');

// directories var
var DIRECTORIES = {
    SRC: 'src/',
    DIST: 'dist/DefaultTVReceiverV2/',
};


var DIR_TO_SERVE = process.env.SERVE_DIR || DIRECTORIES.DIST;
var HTTP_PORT = 8090;

// default task
gulp.task('build', function (callback) {
    runSequence('clean',
        ['css', 'img', 'copy:libs', 'js', 'locales', 'html'],
        callback);
});

//Unitary Tasks
// clean
gulp.task('clean', function () {
    return del(DIRECTORIES.DIST );
});

//lib
gulp.task('copy:libs', function () {
    gulp.src(npmDist(), {base: './node_modules/'})
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace(/\/dist/, '').replace(/\\dist/, '');
        }))
        .pipe(gulp.dest(DIRECTORIES.DIST + '/js'));
});
// images
gulp.task('img', function () {
    gulp.src(DIRECTORIES.SRC + 'img/*')
        .pipe(gulp.dest(DIRECTORIES.DIST + 'img'));
});

// scripts
gulp.task('js', function () {
    gulp.src(DIRECTORIES.SRC + 'js/*')
        .pipe(gulp.dest(DIRECTORIES.DIST + 'js'));
});
// css
gulp.task('css', function () {
    gulp.src(DIRECTORIES.SRC + 'css/*')
        .pipe(gulp.dest(DIRECTORIES.DIST + 'css'));
});

// locales
gulp.task('locales', function () {
    return gulp.src([
        DIRECTORIES.SRC + '/locales/**/*'
    ])
        .pipe(gulp.dest(DIRECTORIES.DIST + 'locales'));
});
// html
gulp.task('html', 'Build the webapp, simply run gulp as shortcut', [], function () {
    gulp.src([DIRECTORIES.SRC + '/index.html'])
        .pipe(gulp.dest(DIRECTORIES.DIST));
});

// DEBUG
gulp.task('default', ['build']);


// Serve webapp on port 8090
gulp.task('connect', false, function () {
    var connect = require('connect');
    var app = connect()
        .use('/', serveStatic(DIR_TO_SERVE, {
            index: [
                process.env.INDEX || "index.html"
            ]
        }));

    require('http').createServer(app)
        .listen(HTTP_PORT)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:' + HTTP_PORT + '/');
        });
});

gulp.task('serve', false, ["connect"], function () {
    require('opn')('http://localhost:8090/')
});

