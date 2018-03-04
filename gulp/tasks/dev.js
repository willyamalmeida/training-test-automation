const gulp = require('gulp');

// Default task
module.exports = gulp.task('dev', ['js', 'pug', 'notes', 'stylus', 'imagemin', 'watch', 'browser-sync', 'js']);
