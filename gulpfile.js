// JS
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
// var minifyCSS = require('gulp-minify-css');

// Tâche gulp pour dire bonjour ;)
gulp.task('hello', function(){
    console.log('Hello World G !');
});

// Tâche pour "watcher" les fichiers scss
gulp.task('watch', ['sass'], function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('**/*.php', browserSync.reload);
});

// Tâche gulp pour compiler scss en css
gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write({
            includeContent: false
        }))
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Tâche pour browserSync avec Wamp
gulp.task('browser-sync', function() {
    browserSync({
        proxy: 'localhost/phantom-git/',
        port: 8080,
        open: true,
        notify: false
    })
});

// Tâche pour automatiser la compilation, le refresh et le watch
gulp.task('default', ['sass', 'watch', 'browser-sync'], function(){

});
