QUnit.module('JSHint - controllers/reset-password.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/reset-password.js should pass jshint.\ncontrollers/reset-password.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/reset-password.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/reset-password.js: line 9, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
