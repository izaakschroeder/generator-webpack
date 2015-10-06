
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    manifest: util.manifest(),
    webpack: util.copy(
      '~webpack.config.js',
      'webpack.config.js'
    ),
  },
});
