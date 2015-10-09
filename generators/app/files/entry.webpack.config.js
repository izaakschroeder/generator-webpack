
import nearest from 'find-nearest-file';
import path from 'path';

// No matter where we are, locate the canonical root of the project.
const root = path.dirname(nearest('package.json'));

export default function({ target, name }) {
  function handle(choice, value) {
    return target === choice ? value : { };
  }
  return {
    entry: {
      [name]: path.join(root, 'entry', `${name}.entry.js`),
    },
    target: target,
    context: root,
    // Output controls the settings for file generation.
    output: {
      filename: '[name].[hash].js',
      path: path.join(root, 'build', name),
      chunkFilename: '[id].[hash].js',
      ...handle('node', {
        libraryTarget: 'commonjs2',
        filename: '[name].js',
      }),
      ...handle('web', {
        publicPath: process.env[`${name.toUpperCase()}_URL`],
      }),
    },
  };
}
