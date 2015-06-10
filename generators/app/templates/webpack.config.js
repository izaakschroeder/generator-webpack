
var fs = require('fs'),
	glob = require('glob'),
	path = require('path');

function modules(dir) {
	return glob.sync(dir).map(function load(x) {
		return require(x);
	});
}

modules('./externals/*.external.js');
modules('./loaders/*.loader.js');

var entry = {

};

module.exports = {
	entry: entry,
	output: output,
	externals: externals,
	resolve: resolve,
	loaders: loaders,
	// Enable source-maps, which are pretty handy for debugging after the code
	// gets mangled from all the transformations that will be happening to it.
	devtool: 'source-map'
};
