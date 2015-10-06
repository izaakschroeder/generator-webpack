
import { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

function inject(entries, module) {
  if (typeof entries === 'string') {
    return [ ...module, entries ];
  } else if (Array.isArray(entries)) {
    return module.concat(entries);
  } else if (typeof entries === 'object') {
    const res = { };
    for (const key in entries) {
      res[key] = inject(entries[key], module);
    }
    return res;
  }
  throw new TypeError();
}

function runtime(target) {
  if (target === 'node') {
    return [
      'webpack-udev-server/hot/dev-server',
      'webpack/hot/signal',
    ];
  }
  return [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
  ];
}

export default function hot({ entry, target }) {
  const env = process.env.NODE_ENV || 'development';

  // Don't use HMR for anything but development.
  if (env !== 'development') {
    return { };
  }

  // Rewrite all the entry points to include HMR code.
  return {
    entry: inject(
      entry,
      runtime(target)
    ),
    module: {
      loaders: [{
        name: 'babel',
        query: {
          plugins: [
            'react-transform',
          ],
          blacklist: [
            // This does NOT work with `react-transform`
            'optimisation.react.constantElements',
          ],
          extra: {
            'react-transform': [{
              target: 'react-transform-hmr',
              imports: [ 'react' ],
              locals: [ 'module' ],
            }],
          },
        },
      }],
    },
    plugins: [
      // Add webpack's HMR runtime.
      new HotModuleReplacementPlugin(),

      // Don't generate bundles with errors so HMR doesn't bomb the app.
      new NoErrorsPlugin(),
    ],
  };
}
