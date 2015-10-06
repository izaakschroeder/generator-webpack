
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/compatibility.webpack.config.js',
      'compatibility.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
