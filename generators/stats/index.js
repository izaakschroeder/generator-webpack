
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/stats.webpack.config.js',
      'stats.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
