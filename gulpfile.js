var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('index.html', ['dist']).on('change', browserSync.reload);
});

gulp.task('default', ['watch'], function() {
  gulp.start();
});
