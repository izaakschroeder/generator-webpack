
// Or is it better to use something like
// https://github.com/deepsweet/autopolyfiller-loader

export default function compatibility(options) {
  // These shims should only be available to web targets.
  if (options.target === 'web') {
    return {
      entry: {
        shiv: 'html5shiv/src/html5shiv-printshiv',
        shim: [ 'es5-shim/es5-shim', 'es5-shim/es5-sham' ],
      },
    };
  }
}
