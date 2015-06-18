
import { DefinePlugin } from 'webpack';
import { assign } from 'lodash';
import dotenv from 'dotenv';

// Load values from .env files; also don't complain about any errors from not
// being able to load the .env file since there are cases where that file most
// likely should not exist.
dotenv.load({ silent: true });



export default function env() {

	const result = { };
	const env = assign({ }, process.env);

	// Use bluebird long traces for development and testing
	// See: https://github.com/petkaantonov/bluebird#error-handling
	env.BLUEBIRD_DEBUG = env['NODE_ENV'] !== 'production';

	for (const key in env) {
		result['process.env.' + key] = process.env[key];
	}

	return {
		plugins: [

			// Export `process.env` to the app being built. Optimize your code by
			// checking `NODE_ENV` and set things like config variables (e.g.
			// `API_URL`).
			new webpack.DefinePlugin(result)
		]
	};
}
