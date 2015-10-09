
import { BannerPlugin, SourceMapDevToolPlugin } from 'webpack';

export default function sourcemaps({ target }) {
  const env = process.env.NODE_ENV || 'development';

  function url() {
    const base = 'https://my-source-maps.com/potato';
    return `${base}/[url]`;
  }

  return {
    // Embed source map support for sane debugging. This kinda cheats by
    // writing source map hooks at the top of every entrypoint.
    plugins: [
      ...target === 'node' && env !== 'production' ? [
        new BannerPlugin('require("source-map-support").install();', {
          raw: true,
          entryOnly: false,
        }),
      ] : [],
      new SourceMapDevToolPlugin({
        filename: env !== 'production' ? null : 'map/[filebase].[hash].js.map',
        append: `\n//# sourceMappingURL=${url()}`,
        module: true,
        columns: true,
      }),
    ],
  };
}
