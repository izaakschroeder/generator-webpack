
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {

	},
	writing: {
		config: util.copy(
			'config/webpack/sass.webpack.config.js',
			'sass.webpack.config.js'
		),
		manifest: util.manifest()
	},
	end: function() {

	}
});
