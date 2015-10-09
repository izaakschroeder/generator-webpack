
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/hot.webpack.config.js',
      'hot.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
