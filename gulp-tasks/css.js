const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

const lib = 'time-select';
const dir = `projects/${lib}`;
const out = `dist/${lib}`;

function css() {
  return gulp.src(`${dir}/src/styles/themes/**/*.scss`)
    .pipe(sass({includePaths: ['node_modules'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${out}/prebuilt-themes`));
}

exports.css = css;
