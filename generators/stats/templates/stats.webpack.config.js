import StatsPlugin from 'stats-webpack-plugin';
import path from 'path';

export default function stats(options) {
	return {
		plugins: [
			new StatsPlugin(path.join(options.output.path, 'stats.json'), {
				hash: true,
				assets: false,
				reasons: false,
				chunks: true,
				source: false
			})
		]
	};
}
