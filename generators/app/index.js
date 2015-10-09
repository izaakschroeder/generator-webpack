
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    entry: util.copy(
      'config/webpack/partial/entry.webpack.config.js',
      'entry.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
