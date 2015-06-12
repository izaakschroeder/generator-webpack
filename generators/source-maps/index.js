
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: function() {

	},
	prompting: function () {

	},
	writing: {
		config: util.copy(
			'config/webpack/source-maps.webpack.config.js',
			'source-maps.webpack.config.js'
		),
		manifest: util.manifest()
	},
	end: function() {

	}
});
