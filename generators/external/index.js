
var util = require('yeoman-util');

module.exports = util.Base.extend({
  prompting: util.prompt([{
    name: 'module',
    message: 'Name of external module (e.g. `underscore`)',
  }, {
    name: 'global',
    message: 'Variable the external exports (e.g. `_`)',
  }, {
    name: 'url',
    message: 'URL the external can be found at',
  }]),

  writing: {
    config: util.copy(
      function(data) {
        return 'config/webpack/' + data.module + '.external.webpack.config.js';
      },
      'external.webpack.config.js'
    ),
  },
});
