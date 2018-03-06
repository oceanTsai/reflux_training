const gulp        = require('gulp');
const browserify  = require('browserify');          //package js
const glob        = require('glob');                //get files names for browserify entries.  (multiple js).
//const rename     = require('gulp-rename');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const path        = require('path');
//const browserSync = require('browser-sync').create(); //hot reload server
const uglify      = require('gulp-uglify');       //minify js
const gulpSass    = require('gulp-sass');           //builder sass to css

gulp.task('builder', function() {
    glob('./src/http-service/entry/**/*.js', {}, function(err, files) {
        files.forEach(function(file) { 
          browserify({entries: [file]})
            .transform("babelify", { presets: ["env", "stage-0", "react"]})
            .transform("browserify-css")
            .bundle()
            .pipe(source(path.basename(file)))
            .pipe(buffer())
            //.pipe(uglify())
            .pipe(gulp.dest('./src/http-service/builder/js'));
        });   
      });
});

gulp.task('scss', function () {
    gulp.src('./src/http-service/resource/sass/**/*.scss')  // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())                                   // 編譯 Scss
        .pipe(gulp.dest('./src/http-service/builder/css')); // 指定編譯後的 css 檔案目錄
});


gulp.task('default', ['scss', 'builder']);