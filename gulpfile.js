var path={};
var gulp=require('gulp'),
    gutil=require('gulp-util'),
    webpack=require('webpack'),
    webpackConfig=require('./webpack.config.js'),
    WebpackDevServer=require('webpack-dev-server'),
    DEV_SERVER_PORT=3000;

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
