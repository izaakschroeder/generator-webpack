
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	// Module settings.
	module: {
		loaders: [{
			test: /\.(scss|sass)$/,
			loaders: [
				ExtractTextPlugin.loader({
					extract: true,
					omit: 1
				}),
				'style',
				'css',
				'autoprefixer?browsers=last 2 version',
				'font',
				'icon',
				'sass?precision=10&outputStyle=expanded&sourceMap=true'
			]
		}]
	},

	plugins: [
		// Some crawlers or things with Javascript disabled prefer normal CSS
		// instead of Javascript injected CSS, so this plugin allows for the
		// collection of the generated CSS into its own file.
		new ExtractTextPlugin('[name].[hash].css'),

		// Ignore CSS far as server-side goes
		// TODO: How to enforce this only on server-side?
		new webpack.NormalModuleReplacementPlugin(/\.s?css$/, 'node-noop')
	]
}
