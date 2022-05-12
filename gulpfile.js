// ░██████╗░██╗░░░██╗██╗░░░░░██████╗░  ███████╗██╗██╗░░░░░███████╗
// ██╔════╝░██║░░░██║██║░░░░░██╔══██╗  ██╔════╝██║██║░░░░░██╔════╝
// ██║░░██╗░██║░░░██║██║░░░░░██████╔╝  █████╗░░██║██║░░░░░█████╗░░
// ██║░░╚██╗██║░░░██║██║░░░░░██╔═══╝░  ██╔══╝░░██║██║░░░░░██╔══╝░░
// ╚██████╔╝╚██████╔╝███████╗██║░░░░░  ██║░░░░░██║███████╗███████╗
// ░╚═════╝░░╚═════╝░╚══════╝╚═╝░░░░░  ╚═╝░░░░░╚═╝╚══════╝╚══════╝


// ****************************
// 1. Déclaration des variables
// ****************************
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
let browserSync = require('browser-sync').create();
let imagemin = require('gulp-imagemin');

// ****************************
// 2. Mes tâches
// ****************************

// images d'abord
gulp.task('img-placement', function(){
  return gulp.src('dev/img/**/*')
  .pipe(imagemin()) // compression des images
  .pipe(gulp.dest('prod/img'));
});

gulp.task('sassification', function(){
  return gulp.src('dev/css/*.scss')
  // add sourcemap file
  .pipe(sourcemaps.init())
  // cross-browser prefixes (-webkit-, -moz-, etc.) 
  .pipe(autoprefixer())
  // compress scss
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  // rename to .min.css
  .pipe(rename(function (path) {
      path.basename += ".min";
  }))
  // write map and css in prod/css
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('prod/css'));
});

// html
gulp.task('htmlification', function(){
  return gulp.src('dev/*.html')
  .pipe(gulp.dest('prod'));
});

gulp.task('jsification', function(){
  return gulp.src('dev/js/*.js')
  .pipe(uglify())
  .pipe(rename(function (path) {
      path.basename += ".min";
  }))
  .pipe(gulp.dest('prod/js'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "prod/"
      }
  });
});

// ****************************
// 3. Exécution des tâches
// ****************************
gulp.task('observation', gulp.parallel(
  'img-placement',
  'browser-sync',
  'sassification',
  'htmlification',
  'jsification',
  function(){
  gulp.watch('dev/img/**/*', gulp.series('img-placement'));
  gulp.watch('dev/css/**/*.scss').on('change', gulp.series('sassification'));
  gulp.watch('dev/*.html').on('change', gulp.series('htmlification'));
  gulp.watch('dev/js/*.js').on('change', gulp.series('jsification'));
  gulp.watch('dev/**/*').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('observation'));