var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
// Static Server + watching scss/html files
gulp.task('serve', ['minify-css'], function() {

    browserSync.init({
       	proxy: "localhost:3000"
    });

    gulp.watch("public/scss/*.scss", ['sass', 'minify-css']);
    gulp.watch("views/*.jade").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("public/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("public/stylesheets"))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', ['sass'], function(){
	return gulp.src('public/stylesheets/style.css')
		.pipe(cleanCSS({debug: true}, function(details){
			console.log(details.name + ':'+ details.stats.orginalSize);
			console.log(details.name + ':'+ details.stats.minifiedSize);
		}))
		.pipe(gulp.dest("public"));
});
gulp.task('minify:images', function(){
	gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/imagesOptimised'))
});

gulp.task('default', ['serve']);