define('studyapp-web/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		email: null,
		password: null
	});
});