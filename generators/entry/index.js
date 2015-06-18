
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	writing: {
		config: util.copy(
			'~config/webpack/<%=name%>.webpack.config.js',
			'entry.webpack.config.js'
		),
		manifest: util.manifest()
	}
});
