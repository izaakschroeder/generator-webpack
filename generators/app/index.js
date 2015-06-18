
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {

	},
	writing: {
		manifest: util.manifest(),
		webpack: util.copy(
			'~webpack.config.js',
			'webpack.config.js'
		)
	},
	end: function() {

	}
});
