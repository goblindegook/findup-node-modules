'use strict';

var findNodeModules = require('find-node-modules');
var findup          = require('findup-sync');
var slice           = [].slice;

/**
 * Find the requested path inside a list of candidate directories.
 *
 * @param  {String} path        Path to locate.
 * @param  {Array}  directories Array of directories.
 * @return {String}             Located path, or null if not found.
 */
function findPath(path, directories) {
  var cwd = directories[0];

  if (!cwd) {
    return null;
  }

  return findup(path, {cwd: cwd}) || findPath(path, slice.call(directories, 1));
}

/**
 * Find the nearest path contained inside a node_modules directory.
 *
 * @param  {String}  path     Path to locate.
 * @param  {Object}  options  Directory to scan (optional, defaults to current directory).
 * @return {String}           Location of the nearest path in node_modules.
 */
module.exports = function(path, cwd) {
  return findPath(path, findNodeModules({cwd: cwd, relative: false}));
};
