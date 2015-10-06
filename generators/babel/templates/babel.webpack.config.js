
export default function babel() {
  return {
    // Module settings.
    module: {
      loaders: [{
        name: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          stage: 0,
          optional: [
            'runtime',
          ],
          jsxPragma: 'createElement',
        },
      }],
    },
  };
}
