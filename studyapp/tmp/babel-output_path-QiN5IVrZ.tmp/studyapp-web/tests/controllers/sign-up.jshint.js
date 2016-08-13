define('studyapp-web/tests/controllers/sign-up.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/sign-up.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/sign-up.js should pass jshint.\ncontrollers/sign-up.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/sign-up.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/sign-up.js: line 59, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 73, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 78, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 81, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 86, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 89, col 56, Use \'===\' to compare with \'0\'.\ncontrollers/sign-up.js: line 143, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/sign-up.js: line 146, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n10 errors');
  });
});