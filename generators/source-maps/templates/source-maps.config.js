
export default {

	plugins: [
		// Embed source map support for sane debugging. This kinda cheats by
		// writing source map hooks at the top of every entrypoint.
		// TODO: Enable this only in dev mode?
		new webpack.BannerPlugin('require("source-map-support").install();', {
			raw: true,
			entryOnly: false
		})
	],

	// Use `eval` style source-maps for development since they're extremely
	// fast to generate.
	devtool: 'eval',

	// Use full source-maps for production builds. This also helps prevent
	// prying eyes from poking into the code by allowing the map file to be
	// hosted separately and privately (e.g. on S3).
	devtool: 'source-map'
}
