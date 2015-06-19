
import nearest from 'find-nearest-file';
import path from 'path';

const root = path.dirname(nearest('package.json'));


{
	entry: {
		<%=name%>: path.join(root, 'lib', 'main')
	},
	target: '<%=target%>',
	context: root,
	// Output controls the settings for file generation.
	output: {
		filename: '[name].[hash].js',
		publicPath: '',
		path: path.join(root, 'build'),
		chunkFilename: '[id].[hash].js'
	}
}
