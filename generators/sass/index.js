
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	writing: {
		config: util.copy(
			'~config/webpack/partial/sass.webpack.config.js',
			'sass.webpack.config.js'
		),
		manifest: util.manifest()
	}
});
