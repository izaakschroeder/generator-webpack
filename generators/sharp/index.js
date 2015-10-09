
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/sharp.webpack.config.js',
      'sharp.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
