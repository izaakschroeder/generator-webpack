
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { NormalModuleReplacementPlugin } from 'webpack';

export default function sass({ target }) {
  const env = process.env.NODE_ENV || 'development';
  const external = env !== 'development';

  return {
    // Module settings.
    module: {
      loaders: [{
        test: /\.(scss|sass)$/,
        loaders: [
          ExtractTextPlugin.loader({
            extract: true,
            omit: 1,
          }),
          'style',
          'css',
          'autoprefixer?browsers=last 2 version',
          'font',
          'sass?precision=10&outputStyle=expanded&sourceMap=true',
        ],
      }],
    },

    plugins: target === 'node' ? [
      // Ignore CSS far as server-side goes
      new NormalModuleReplacementPlugin(/\.(scss|sass)$/, 'node-noop'),
    ] : external ? [
      // Some crawlers or things with Javascript disabled prefer normal CSS
      // instead of Javascript injected CSS, so this plugin allows for the
      // collection of the generated CSS into its own file.
      new ExtractTextPlugin('[name].[contenthash].css'),
    ] : [ ],
  };
}
