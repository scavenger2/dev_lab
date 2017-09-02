var path = require('path');
// Try to use Template Engine 'PUG'
// check 
//     1. https://github.com/pugjs/babel-plugin-transform-react-pug
//     2. https://stackoverflow.com/questions/42104697/how-to-set-up-web-pack-for-pug-react-and-es6
var config = {
	entry: [path.resolve(__dirname, 'src/main.js')],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		    {
				test: /\.js$/,
				loaders: ['babel']
		    }
            /*
             * {test: /\.sass$/, loaders:[]},
             * {test: /\.pug$/, loaders:[]}
             */
		]
	}
};

module.exports = config;
