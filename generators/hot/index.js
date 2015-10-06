
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/hot.webpack.config.js',
      'hot.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
