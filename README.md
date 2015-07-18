# findup-node-modules [![Build Status](https://travis-ci.org/goblindegook/findup-node-modules.svg?branch=master)](https://travis-ci.org/goblindegook/findup-node-modules)

> Finds a valid file or folder path by looking inside one or more `node_modules` directories, starting with the one nearest.  Mostly useful when including asset files (such as style sheets and images) bundled with a Node module.


## Install

```
$ npm install --save-dev findup-node-modules
```


## Usage

```js
var findupNodeModules = require('findup-node-modules');

findupNodeModules('cake/chocolate.scss');
//=> '/parent/this/node_modules/cake/chocolate.scss' (if it exists in this directory's node_modules)

findupNodeModules('cake/chocolate.scss');
//=> '/parent/node_modules/cake/chocolate.scss' (if it exists in a parent's node_modules)

findupNodeModules('cake/lie.scss');
//=> null (if the cake is a lie)

findupNodeModules('cake/chocolate.scss', '/outside');
//=> '/outside/node_modules/cake/chocolate.scss'
```


## API

### findupNodeModules(path, [cwd])

#### path

*Required*  
Type: `string`

Directory or file path to locate inside `node_modules`.

#### cwd

Type: `string`  
Default: `null` (resolves to current directory)

Directory to begin searching.


## License

MIT © [Luís Rodrigues](https://github.com/goblindegook)
