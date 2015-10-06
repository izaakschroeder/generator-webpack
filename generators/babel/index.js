
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/babel.webpack.config.js',
      'babel.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
