# generator-webpack

Scaffold common webpack patterns.

```sh
npm install -g @metalab/generator-webpack
# Setup webpack proper.
yo @metalab/webpack
# Create your first entry.
yo @metalab/webpack:entry
# Build the entry you just made.
npm run build:name
```

Sub-generators
 * babel - Add support for ES6.
 * build-info - Inject a build-info module.
 * compatibility - Add support for older versions of IE.
 * env - Import environment variables into your apps.
 * entry - Generate a config for an entrypoint.
 * external - Bundle an external resource.
 * hot - Hot module reload magic.
 * json - JSON/JSON5 support.
 * optimize - Enable UglifyJS support for production builds.
 * postcss - Add support for postcss stylesheets.
 * progress - Show progress info as webpack build goes on.
 * root - Make another folder act like `node_modules`.
 * sass - Add support for SASS stylesheets.
 * sharp - Image pre-processing with sharp.
 * source-maps - Add sensible source-map support.
 * stats - Generate a `stats.json` file.
 * vendor - Bundle common code into a `vendor.js` file.

The webpack structure is setup as follows:

```
+ config
 + webpack
  + partial
   - babel.webpack.config.js
   - sass.webpack.config.js
   - ...
  - entrypoint-1.webpack.config.js
  - entrypoint-2.webpack.config.js
  - ...
```


Other thoughts:
 * https://www.npmjs.com/package/git-sha-webpack-plugin
 * https://github.com/huston007/webpack-config-merger
 * https://www.npmjs.com/package/webpack-graph
 * https://github.com/deepsweet/autopolyfiller-loader
