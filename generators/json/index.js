
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/json.webpack.config.js',
      'json.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
