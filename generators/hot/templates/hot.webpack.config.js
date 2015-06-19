
import { HotModuleReplacementPlugin, NoErrorsPlugin } from 'webpack';

// select appropriate hot loading code
// e.g. hot-dev-server? depending on env

// allow hot reload of express? of stuff in s3? etc?

export default function hot() {
	return {
		plugins: [
			new HotModuleReplacementPlugin(),
			// Only for watch mode
			new NoErrorsPlugin()
		]
	};
}
