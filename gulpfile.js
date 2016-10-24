var browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    gp_uglify = require('gulp-uglify'),
    gulp = require('gulp'),
    open = require('gulp-open'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');



gulp
  // performs magic
  .task('production', function(){
    process.env.NODE_ENV = 'production';
    gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(
        browserify({
          transform: 'reactify',
          debug: false
        })
      )
      .pipe(babel({
        presets: ['es2015','react']
      }))

      .pipe(concat('main.js'))
      .pipe(gp_uglify())
      .pipe(plumber.stop())
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
  })
  .task('development', function(){
    process.env.NODE_ENV = 'development';
    gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(
        browserify({
          transform: 'reactify',
          debug: true
        })
      )
      // .pipe(babel({
      //   presets: ['es2015','react']
      // }))

      // .pipe(concat('main.js'))
      // .pipe(gp_uglify())
      .pipe(plumber.stop())
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
  })

  // moves source files to dist
  .task('copy', function(){
    gulp
      .src('src/index.html')
      .pipe(gulp.dest('dist'));

     gulp
      .src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));

     gulp
      .src('src/img/**/*.*')
      .pipe(gulp.dest('dist/img'));
  })

  // local development server
  .task('connect', function(){
    connect.server({
      root: ['dist'],
      port: '8080',
      base: 'http://localhost',
      livereload: true
    });
  })

  gulp.task('sass', function () {
	gulp.src('src/css/*')
			.pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(autoprefixer({browsers: ['last 2 versions', '> 5%']}))
			.pipe(gulp.dest('./dist/css/'));
});

  // opens the application in chrome
  gulp.task('open', function(){
    gulp
      .src('dist/index.html')
      .pipe(
        open('', {app: 'google chrome',url: 'http://localhost:8080/'})
      );
  })


  // build the application
  .task('run', ['development','sass', 'copy', 'connect', 'open'])
  .task('dev', ['development', 'copy'])
  .task('prod', ['production', 'copy'])

  // watch for source changes
  .task('watch', ['run'], function(){
    livereload.listen();
    gulp.watch('src/**/*.*', ['dev']);

  });
