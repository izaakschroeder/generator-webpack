
var fs = require('fs'),
	glob = require('glob'),
	path = require('path');

function merge(destination, target) {

}

/**
 * Merge all configurations in dir into config.
 * @param {Object} config [description]
 * @param {String} dir [description]
 * @returns {Object} [description]
 */
function load(config, dir) {
	return glob.sync(dir, { realpath: true }).map(function(file) {
		return require(file);
	}).reduce(function load(local) {
		return merge(config, local);
	}, config);
}

// ES6 support
require('babel-core/register');

// Create initial configuration
// -----------------------------------------------------
// PLACE YOUR CODE HERE
// -----------------------------------------------------
var config = {
	env: process.env.NODE_ENV || 'development'
};

// Load all the webpack settings
config = load(config, path.join('config', 'webpack', '*.webpack.config.js'));

// Export everything.
module.exports = config;
