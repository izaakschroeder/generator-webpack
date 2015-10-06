
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/env.webpack.config.js',
      'env.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
