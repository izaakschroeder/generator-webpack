# generator-webpack

Scaffold common webpack patterns.

```
npm install -g @metalab/generator-webpack
yo @metalab/webpack
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
 * postcss - Add support for postcss stylesheets.
 * progress - Show progress info as webpack build goes on.
 * sass - Add support for SASS stylesheets.
 * sharp - Image pre-processing with sharp.
 * source-maps - Add sensible source-map support.
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
- webpack.config.js
```

The root `webpack.config.js` is responsible for building all entrypoints defined in `config/webpack`. Each entrypoint in `config/webpack` can incorporate as many partials as it desires to extend its functionality.

Other thoughts:
 * https://www.npmjs.com/package/git-sha-webpack-plugin
 * https://github.com/huston007/webpack-config-merger
 * https://www.npmjs.com/package/webpack-graph
 * https://github.com/deepsweet/autopolyfiller-loader
