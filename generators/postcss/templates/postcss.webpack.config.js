
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// `postcss` modules.
import autoprefixer from 'autoprefixer-core';
import precss from 'precss';
import lost from 'lost';
import cssimport from 'postcss-import';
import fonts from 'postcss-font-magician';

// Regular expression used to detect what kind of files to process.
const IS_STYLE = /\.(scss|sass|css)$/;

/**
 * Convert a loader string and query object into a complete loader string.
 * @param {String} loader Name of loader.
 * @param {Object} query Parameters object.
 * @returns {String} Generated loader string with query.
 */
function pack(loader, query) {
  return `${loader}?${JSON.stringify(query)}`;
}

/**
 * Generate the correct `loader` object given the parameters.
 * @param {String} target The webpack target.
 * @param {Boolean} external Whether to generate external CSS files.
 * @param {Boolean} minimize Whether to compress generated CSS.
 * @param {String} loader Loader for processing the stylesheet into CSS.
 * @returns {String} Final loader.
 */
function loaders({ target, external, minimize, loader }) {
  const config = {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]-[local]-[hash:base64:5]',
    minimize: minimize,
  };
  if (target === 'web') {
    if (external) {
      return ExtractTextPlugin.extract(
        'style-loader',
        `${pack('css-loader', config)}!${loader}`
      );
    }
    return `style-loader!${pack('css-loader', config)}!${loader}`;
  }
  return `${pack('css-loader/locals', config)}!${loader}`;
}

export default function postcss({ target }) {
  const env = process.env.NODE_ENV || 'development';
  const external = env !== 'development' && target === 'web';
  const minimize = env === 'production';

  return {
    // Module settings.
    module: {
      loaders: [{
        test: IS_STYLE,
        loader: loaders({
          loader: 'postcss-loader',
          target,
          external,
          minimize,
        }),
      }],
    },

    postcss() {
      return [
        cssimport({
          // Make webpack acknowledge imported files.
          onImport: files => files.forEach(this.addDependency),
        }),
        lost,
        precss,
        fonts,
        autoprefixer({
          browsers: [ 'last 2 versions' ],
        }),
      ];
    },

    plugins: [
      ...(external ? [
        // Some crawlers or things with Javascript disabled prefer normal CSS
        // instead of Javascript injected CSS, so this plugin allows for the
        // collection of the generated CSS into its own file.
        new ExtractTextPlugin('[name].[contenthash].css'),
      ] : [ ]),
    ],
  };
}
