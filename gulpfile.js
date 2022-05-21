const { src, dest, watch, series } = require('gulp');

//CSS Y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')

//IMAGENES 
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');


/**
 * The function css() takes the file app.scss, compiles it into CSS, adds vendor prefixes, and saves
 * the result in the build/css folder.
 * @param done - This is a callback function that tells Gulp that the task is done.
 */
function css(done) {
    //COMPILAR SASS
    // PASOS: 1- IDENTIFICAR EL ARCHIVO, 2- COMPILARLA, 3 -GUARDAR EL .CSS

    src('src/scss/app.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'));

    done();
}
function js() {
    return src('src/js/app.js')
        .pipe(dest('build/js'));
}
/**
 * This function takes the file scrollreveal.min.js from the src/js folder and puts it in the build/js
 * folder.
 * @returns The scrollreveal function is returning the src function.
 */
function scrollreveal() {
    return src('src/js/scrollreveal.min.js')
        .pipe(dest('build/js'))
}
function imageJs() {
    return src('src/js/image.js')
        .pipe(dest('build/js'))
}
/**
 * It takes all the images in the src/img folder, converts them to webp format, and saves them in the
 * build/img folder.
 * @returns the src() function.
 */
function versionWebp() {
    const option = {
        quality: 50,
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp(option))
        .pipe(dest('build/img'));
}

/**
 * It takes all the images in the src/img folder, converts them to avif format, and saves them in the
 * build/img folder.
 * @returns the src() function.
 */
function versionAvif() {
    const option = {
        quality: 50,
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif(option))
        .pipe(dest('build/img'));
}
/**
 * It takes all the images in the src/img folder and optimizes them. Then it puts them in the build/img
 * folder.
 * @returns The function img() is returning the src() function.
 */
function img() {
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
}
/**
 * The dev function watches the scss and img folders for changes, and if there are any, it runs the css
 * and img functions.
 */

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', img);
    watch('src/js/*.js', js)
}
exports.css = css;
exports.dev = dev;
exports.img = img;
exports.js = js;
exports.scrollreveal = scrollreveal;
exports.imageJs = imageJs;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(img, js, scrollreveal, imageJs, versionWebp, versionAvif, css, dev);
//series - EJECUTA  LA PRIMERA TAREA Y UNA VEZ QUE LA COMPLETA SE VA A LA SEGUNDA TAREA
//parallel -  TODOS LAS TAREAS INICIAN AL MISMO TIEMPO