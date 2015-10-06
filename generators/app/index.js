
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
  writing: {
    manifest: util.manifest(),
    webpack: util.copy(
      '~webpack.config.js',
      'webpack.config.js'
    ),
  },
});
