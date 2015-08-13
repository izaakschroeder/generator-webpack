
import nearest from 'find-nearest-file';
import path from 'path';

// No matter where we are, locate the canonical root of the project.
const root = path.dirname(nearest('package.json'));

// TODO: Only enable hashing in production
// TODO: Use git hash value instead?
const config = {
	id: '<%=name%>',
	entry: {
		<%=name%>: path.join(root, 'lib', '<%=name%>')
	},
	target: '<%=target%>',
	context: root,
	// Output controls the settings for file generation.
	output: {
		filename: '<%=target === "node" ? "[name].js" : "[name].[hash].js"%>',
		publicPath: '<%=target === "node" ? "/" : "/assets"%>',
		path: path.join(root, 'build', '<%=name%>'),
		chunkFilename: '[id].[hash].js'
	}
};

export default config;
