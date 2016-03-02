const fs = require('fs');
const gulp = require('gulp');
const rename = require('gulp-rename');


gulp.task('default', function () {
  const files = fs.readdirSync('./dist').filter(f => f.indexOf('forge') > -1 && f.indexOf('debug') === -1);
  const hash = files[0].replace(/(forge-)|(\.js)/g, '');

  return gulp
    .src('./dist/forge-debug.js')
    .pipe(rename('forge-' + hash + '-debug.js'))
    .pipe(gulp.dest('./dist'));
});
