
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/vendor.webpack.config.js',
      'vendor.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
