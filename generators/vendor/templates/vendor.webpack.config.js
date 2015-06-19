

// See: http://clarkdave.net/2015/01/how-to-use-webpack-with-rails/
import { optimize.CommonsChunkPlugin } from 'webpack';
import fs from 'fs';

export default function() {

	const modules = fs.readdirSync('node_modules');

	return {
		entry: {

			// The vendor entry is for grouping external libraries that are not
			// likely to change, and thus can be packaged up separately from the
			// main application code. This is handy for caching since the client
			// won't have to re-download all the extra code.
			vendor: modules
		},

		plugins: [
			// This performs the actual bundling of all the vendor files into their
			// own package. See the vendor entry above for more info.
			new CommonsChunkPlugin('vendor', '[name].[hash].js'),
		]
	};
}
