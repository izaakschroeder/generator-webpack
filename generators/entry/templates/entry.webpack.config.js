
import nearest from 'find-nearest-file';
import partial from 'webpack-partial';
import path from 'path';

// No matter where we are, locate the canonical root of the project.
const root = path.dirname(nearest('package.json'));

// TODO: Only enable hashing in production
// TODO: Use git hash value instead?
const config = {
  id: '<%=name%>',
  entry: {
    <%=name%>: path.join(root, 'entry', '<%=name%>.entry.js')
  },
  target: '<%=target%>',
  context: root,
  // Output controls the settings for file generation.
  output: {
    <% if (target === 'node') { %>libraryTarget: 'commonjs2',<% }%>
    filename: '<%=target === "node" ? "[name].js" : "[name].[hash].js"%>',
    <% if (target !== 'node') { %>publicPath: process.env['<%=name.toUpperCase()%>_URL'],<% }%>
    path: path.join(root, 'build', '<%=name%>'),
    chunkFilename: '[id].[hash].js'
  }
};

// Extend the default webpack configuration with any partials you want.
// e.g. partial(config, 'babel', 'compatibility');
export default partial(
  config
);
