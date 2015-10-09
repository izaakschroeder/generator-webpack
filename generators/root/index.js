
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      'config/webpack/partial/root.webpack.config.js',
      'root.webpack.config.js'
    ),
  },
});
