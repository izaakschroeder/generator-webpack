
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/env.webpack.config.js',
      'env.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
