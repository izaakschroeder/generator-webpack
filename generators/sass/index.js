
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/sass.webpack.config.js',
      'sass.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
