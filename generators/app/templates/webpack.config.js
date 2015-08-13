
var glob = require('glob'),
	path = require('path');

/**
 * Merge all configurations in dir into config.
 * @param {Object} config [description]
 * @param {String} dir [description]
 * @returns {Object} [description]
 */
function load(dir) {
	return glob.sync(dir, { realpath: true }).map(function(file) {
		return require(file);
	});
}

// ES6 support
require('babel-core/register');

// Export everything.
module.exports = load(path.join('config', 'webpack', '*.webpack.config.js'));
