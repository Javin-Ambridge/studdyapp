QUnit.module('JSHint - controllers/sign-up.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/sign-up.js should pass jshint.\ncontrollers/sign-up.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/sign-up.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/sign-up.js: line 22, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 36, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 39, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
});
