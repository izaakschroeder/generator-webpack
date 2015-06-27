
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	writing: {
		config: util.copy(
			'~config/webpack/partial/yaml.webpack.config.js',
			'yaml.webpack.config.js'
		),
		manifest: util.manifest()
	}
});
