var gulp = require('gulp')
    jshint = require('gulp-jshint'),
    apidoc = require('gulp-apidoc'),
    mocha = require('gulp-mocha');

gulp.task('lint', function() {
  gulp.src('app/**/*.js')
      .pipe(jshint());
});

gulp.task('mocha', function() {
  gulp.src('app/test/test.js'. { read: false })
      .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('apidoc', function(done) {
  apidoc({
    src: 'routes/',
    dest: 'doc/'
  }, done);
});

gulp.task('default', ['lint', 'mocha', 'apidoc']);
