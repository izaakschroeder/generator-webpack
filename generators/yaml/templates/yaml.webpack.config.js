
export default function yaml(options) {
	return {
		module: {
			loaders: [{
				name: 'yaml',
				test: /\.ya?ml$/,
				loader: 'yaml!json5'
			}]
		}
	};
}
