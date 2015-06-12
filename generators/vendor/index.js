
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {

	},

	writing: {
		config: util.copy(
			'config/webpack/vendor.webpack.config.js',
			'vendor.webpack.config.js'
		),
		manifest: util.manifest()
	},
	end: function() {

	}
});
