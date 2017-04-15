var webpackConfig = require('./config/webpack/development.js');

// Ref.
// https://github.com/webpack-contrib/karma-webpack
module.exports = function (config) {
    config.set({
        browsers:['Chrome'],
        singleRun: true,
        frameworks:['mocha'],
        files: [
            'node_modules/jquery/dist/jquery.min.js',
            'app/javascript/tests/**/*.test.jsx'
        ],
        preprocessors: {
            'app/javascript/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};