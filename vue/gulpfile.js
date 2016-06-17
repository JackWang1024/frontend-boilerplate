var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

// gulp.task('default', function(callback) {
// 	webpack(require('./webpack.config.js'), function(err, stats) {
// 		if(err) throw new gutil.PluginError('webpack', err);
// 		gutil.log('[webpack]', stats.toString());
//         callback();
// 	});
// });


var rev=require('gulp-rev');
var override=require('gulp-rev-css-url');
 
gulp.task('rev',function(){
    return gulp.src('./src/**/*')
                .pipe(rev())
                .pipe(override())
                .pipe(gulp.dest('./build/'))
                .pipe(rev.manifest())
                .pipe(gulp.dest('./build/'));
});