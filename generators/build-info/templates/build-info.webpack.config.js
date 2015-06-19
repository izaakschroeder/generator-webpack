

import nearest from 'find-nearest-file';
import path from 'path';
import fs from 'fs';
import Promise from 'bluebird';

const root = nearest('package.json');

function git(...args) {
	return new Promise(function gitResolve(resolve, reject) {
		execFile('git', args, {
			cwd: self.path
		}, function gitComplete(err, result) {
			if (err) {
				reject(err);
			} else {
				resolve(result.trim());
			}
		});
	});
}

function pkg() {
	return new Promise(function pkgResolve(resolve, reject) {
		fs.readFile('package.json', 'utf8', function(err, data) {
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


export default function buildInfo() {
	git('rev-parse', '--verify', 'HEAD')
}
