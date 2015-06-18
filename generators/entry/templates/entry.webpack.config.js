
import nearest from 'find-nearest-file';
import path from 'path';

const root = nearest('package.json');

{
	entry: {
		<%=name%>: path.join(root, 'lib', 'main')
	},
	// Output controls the settings for file generation.
	output: {
		filename: '[name].[hash].js',
		publicPath: '',
		path: path.join(__dirname, 'build'),
		chunkFilename: '[id].[hash].js'
	}
}
