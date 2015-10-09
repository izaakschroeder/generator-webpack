
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/progress.webpack.config.js',
      'progress.webpack.config.js'
    ),
  },
});
