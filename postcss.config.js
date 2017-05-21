var webpack = require('webpack');
var path = require('path');

module.exports = {
    plugins:[
        require('postcss-smart-import')({
            addDependencyTo: webpack,
            path: [path.resolve('src')],
        }),
        // require('stylelint')({failOnError: true}),
        require('postcss-reporter')({ clearMessages: true }),
        require('postcss-mixins'),
        require('postcss-for')(),
        require('postcss-nested'),
        require('postcss-cssnext')({
            'browsers': [
                '> 1%',
                'last 2 versions',
                'ios_saf >= 6',
            ]
        }),
        require('postcss-simple-vars')(),
    ]
};
