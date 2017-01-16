define('studyapp-web/tests/controllers/learn-more.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/learn-more.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/learn-more.js should pass jshint.\ncontrollers/learn-more.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/learn-more.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});