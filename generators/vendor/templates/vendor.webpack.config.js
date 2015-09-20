
import { optimize } from 'webpack';

export default function({ target, entry }) {
	return {
		externals: target === 'node' ? [(context, request, cb) => {
			cb();
			// TODO: Externalize node vendor modules for server-side.
			// cb(null, 'commonjs ' + request);
		}] : [ ],
		plugins: target !== 'node' ? [
			// This performs the actual bundling of all the vendor files into their
			// own package. See the vendor entry above for more info.
			new optimize.CommonsChunkPlugin({
				name: 'vendor',
				filename: '[name].[hash].js',
				minChunks: (module) => {
					return module.resource &&
						module.resource.indexOf('node_modules') !== -1;
				}
			})
		] : [ ]
	};
}
