
var util = require('yeoman-util');

module.exports = util.Base.extend({
  writing: {
    config: util.copy(
      '~config/webpack/partial/optimize.webpack.config.js',
      'optimize.webpack.config.js'
    ),
  },
});
