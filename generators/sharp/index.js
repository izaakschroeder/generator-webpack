
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/sharp.webpack.config.js',
      'sharp.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
