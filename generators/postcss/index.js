
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/postcss.webpack.config.js',
      'postcss.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
