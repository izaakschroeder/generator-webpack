
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
  initializing: function() {

  },
  prompting: util.prompt([{
    name: 'module',
  }, {
    name: 'global',
  }, {
    name: 'url',
  }]),

  writing: {
    config: util.copy(
      '~config/webpack/external.webpack.config.js',
      '<%=name%>.external.webpack.config.js'
    ),
    manifest: util.manifest(),
  },
});
