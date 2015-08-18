
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	prompting: util.prompt([{
		name: 'name',
		type: 'input',
		default: 'main',
		message: 'Name of entrypoint'
	}, {
		name: 'target',
		type: 'list',
		choices: [ 'node', 'web' ],
		default: 'web',
		message: 'Runtime environment'
	}]),
	writing: {
		config: util.copy(
			'~config/webpack/${name}.webpack.config.js',
			'entry.webpack.config.js'
		),
		manifest: util.manifest()
	}
});
