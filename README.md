# generator-webpack

Scaffold common webpack patterns.

```
npm install -g @metalab/generator-webpack
yo @metalab/webpack
```

Sub-generators
 * babel - Add support for ES6.
 * compatibility - Add support for older versions of IE.
 * env - Import environment variables into your apps.
 * entry - Generate a config for an entrypoint.
 * external - Bundle an external resource.
 * progress - Show progress info as webpack build goes on.
 * sass - Add support for SASS stylesheets.
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

Todo:
 * react - Add support for React + JSX
 * hot - Enable HMR
