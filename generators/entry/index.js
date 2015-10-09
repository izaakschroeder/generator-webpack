
var util = require('yeoman-util');

module.exports = util.Base.extend({
  prompting: util.prompt([{
    name: 'name',
    type: 'input',
    default: 'main',
    message: 'Name of entrypoint',
  }, {
    name: 'target',
    type: 'list',
    choices: [ 'node', 'web' ],
    default: 'web',
    message: 'Runtime environment',
  }]),
  writing: {
    base: util.template(
      function(data) {
        return 'config/webpack/' + data.name + '.webpack.config.babel.js';
      },
      'loader.js',
      { overwrite: false }
    ),
    entry: util.template(
      function(data) {
        return 'entry/' + data.name + '.entry.js';
      },
      'entry.js',
      { overwrite: false }
    ),
    manifest: util.manifest(),
  },
});
