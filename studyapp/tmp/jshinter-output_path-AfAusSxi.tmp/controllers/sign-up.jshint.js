QUnit.module('JSHint - controllers/sign-up.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/sign-up.js should pass jshint.\ncontrollers/sign-up.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/sign-up.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/sign-up.js: line 67, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 73, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 78, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 81, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 86, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 90, col 56, Use \'===\' to compare with \'0\'.\ncontrollers/sign-up.js: line 171, col 50, Missing semicolon.\ncontrollers/sign-up.js: line 172, col 22, Missing semicolon.\ncontrollers/sign-up.js: line 178, col 54, Missing semicolon.\ncontrollers/sign-up.js: line 180, col 22, Missing semicolon.\ncontrollers/sign-up.js: line 218, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 221, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n14 errors');
});