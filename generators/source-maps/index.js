
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/source-maps.webpack.config.js',
      'source-maps.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
