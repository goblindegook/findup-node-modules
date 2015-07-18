'use strict';

var path = require('path');
var test = require('tape');

var findupNodeModules = require('./');

test('findup-node-modules', function(t) {
  t.plan(5);

  t.equals(
    findupNodeModules('tape'),
    path.resolve('node_modules/tape')
  );

  t.equals(
    findupNodeModules('tape', '.'),
    path.resolve('node_modules/tape')
  );

  t.equals(
    findupNodeModules('tape', './subdirectory'),
    path.resolve('node_modules/tape')
  );

  t.equals(
    findupNodeModules('no/such/path'),
    null
  );

  t.equals(
    findupNodeModules('tape', '/no/such/path'),
    null
  );

});
