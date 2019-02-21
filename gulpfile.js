var gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');

//只需键入gulp命令，默认执行default中的所有命令名
gulp.task('default',['connect','watch','all']);
//开启服务器
gulp.task('connect', function() {
    connect.server({
        root:'dist',//设置以dist为根目录打开
        port:9999,//设置默认端口号 
          //热更新
        livereload: true
    });
  });
   
//压缩html
//命令:npm install -D gulp-htmlmin 安装上这个包
//gulp minihtml
gulp.task('minihtml',function(){
    gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true,minifyCSS:true,minifyJS:true }))
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload())
    console.log('压缩html')
    
})
//压缩css
//gulp minicss
gulp.task('minicss',function(){
    gulp.src('app/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
    console.log('压缩css')    
})
//压缩js
//gulp minijs
gulp.task('minijs',function(){
    gulp.src('app/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
})
//压缩图片
gulp.task('miniimages',function(){
    gulp.src('app/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
    console.log('压缩iamge')    
})
 
//监听html,如果发生改变就从新压缩
gulp.task('watch',function(){
    gulp.watch('app/*.html',['minihtml'])
    gulp.watch('app/css/**/*.css',['minicss'])
    gulp.watch('app/js/**/*.js',['minijs'])
    gulp.watch('app/images/**/*',['miniimages'])
})


gulp.task('all',['minicss','minihtml','minijs','miniimages'],function(){
    // console.log('情人节快乐')
})
