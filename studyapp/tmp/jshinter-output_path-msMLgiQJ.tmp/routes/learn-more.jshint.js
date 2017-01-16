QUnit.module('JSHint - routes/learn-more.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/learn-more.js should pass jshint.\nroutes/learn-more.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/learn-more.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
