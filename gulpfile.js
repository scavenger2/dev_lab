var path={};
var gulp=require('gulp'),
    gutil=require('gulp-util'),
    jsdoc=require('gulp-jsdoc3'),
    webpack=require('webpack'),
    webpackConfig=require('./webpack.config.js'),
    WebpackDevServer=require('webpack-dev-server'),
    // eslint
    DEV_SERVER_PORT=3000;

// Documentation should be generated from GULP task and use certain plugin
// https://www.npmjs.com/package/gulp-jsdoc3
var jsdoc=require('gulp-jsdoc3');
gulp.task('jsdoc', function(callback){
});

// Generate parser by compiling PEG file
// or try https://www.npmjs.com/package/gulp-peg
var pegjs=require('gulp-pegjs');
gulp.task('generate-parser', function(){
    return gulp.src('src/peg/*.pegjs')
                .pipe(pegjs({
                    format: "commonjs",
                    output: "source"
                }))
                .pipe(gulp.dest('src'));
});

// Used for producing PRODUCTION-build
gulp.task('build', function(callback){
    var config=Object.create(webpackConfig);
    config.plugins=config.plugins.concat(
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
    );
});
gulp.task('webpack-dev-server', function(callback){
    var config=Object.create(webpackConfig);
    config.devtool='eval';
    config.debug=true;
    //REQUIREMENT: using sourcemap in DEV mode
    //REQUIREMENT: when SASS files change, re-compile the files to generate new CSS files
    //REQUIREMENT: using ESLint to verify the quality of source, but LINT should be applied to JS part right?

    new WebpackDevServer(
            webpack(config),
            {
                'publicPath': '/'+config.output.publicPath,
                'contentBase': 'dist/',
                'stats': {
                    colors: true
                }
            }
        ).listen(
            DEV_SERVER_PORT,
            'localhost',
            function(err){
                if(err) throw new gutil.PluginError('webpack-dev-server', err);
                gutil.log(
                    '[webpack-dev-server]',
                    'http://localhost:'+DEV_SERVER_PORT+'/webpack-dev-server/index.html'
                );
            }
        )
})
