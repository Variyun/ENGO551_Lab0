const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//scss to css
function style() {
    //grab scss file and compile to css
    return gulp.src('./src/scss/**/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        //browser sync
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    //watch for changes and reload page as necessary
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
