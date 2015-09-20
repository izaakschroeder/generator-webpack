
export default function json5(options) {
	return {
		module: {
			loaders: [{
				name: 'json5',
				test: /\.json5?$/,
				loader: 'json5'
			}]
		}
	};
}
