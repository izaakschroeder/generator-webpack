
import path from 'path';
import fs from 'fs';
import Promise from 'bluebird';

function git(root, ...args) {
	return new Promise(function gitResolve(resolve, reject) {
		execFile('git', args, {
			cwd: root
		}, function gitComplete(err, result) {
			if (err) {
				reject(err);
			} else {
				resolve(result.trim());
			}
		});
	});
}

function pkg(root) {
	return new Promise(function pkgResolve(resolve, reject) {
		fs.readFile(path.join(root, 'package.json'), 'utf8', function(err, data) {
			let result = null;
			if (err) {
				return reject(err);
			}
			try {
				result = JSON.parse(data)
			} catch(parseError) {
				return reject(parseError);
			}
			return resolve(result);
		})
	});
}

function loader() {
	const callback = this.async();
	this.cacheable();

	const info = Promise.props({
		commit: git(this.context, 'rev-parse', '--verify', 'HEAD'),
		version: pkg(this.context).then(pkg => pkg.version)
	});

	info.then(function(result) {
		return JSON.stringify(result);
	}).nodeify(callback);
}


export default function buildInfo(options) {

	return {
		module: {
			loaders: [{
				name: 'build-info',
				loader: loader
			}]
		},
		alias: {
			'build-info': 'build-info!json!' + options.context
		}
	};

}
