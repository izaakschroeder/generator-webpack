
export default function sourcemaps(options) {

	return {
		// Embed source map support for sane debugging. This kinda cheats by
		// writing source map hooks at the top of every entrypoint.
		plugins: options.target === 'node' &&  options.env !== 'production' ? [
			new webpack.BannerPlugin('require("source-map-support").install();', {
				raw: true,
				entryOnly: false
			})
		] : null,

		// Use `eval` style source-maps for development since they're extremely
		// fast to generate.
		// Use full source-maps for production builds. This also helps prevent
		// prying eyes from poking into the code by allowing the map file to be
		// hosted separately and privately (e.g. on S3).
		devtool: options.env === 'production' ? 'source-map' : 'eval'
	};
}
