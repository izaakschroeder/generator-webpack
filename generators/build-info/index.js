
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	writing: {
		config: util.copy(
			'~config/webpack/partial/build-info.webpack.config.js',
			'build-info.webpack.config.js'
		)
	}
});
