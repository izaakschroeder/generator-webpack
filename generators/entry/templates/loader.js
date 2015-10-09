import partial from 'webpack-partial';

// Extend the default webpack configuration with any partials you want.
// e.g. partial(config, './partial/entry.webpack.config.js');
export default partial(
  { name: '${name}', target: '${target}' },
  './partial/entry.webpack.config.js'
);
