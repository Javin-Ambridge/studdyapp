define('studyapp-web/controllers/sign-up', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		alreadySignedUp: false,
		uni: null,
		universities: [{
			name: 'University of Waterloo'
		}, {
			name: 'Wilfred Laurier'
		}],
		courses: ['course1', 'course2', 'course3'],

		accountAlreadyCreated: _ember['default'].computed('alreadySignedUp', function () {
			return this.get('alreadySignedUp');
		}),

		actions: {
			saveUser: function saveUser() {
				var user = this.store.createRecord('user', {
					name: 'Javin Ambridge',
					email: 'javin.ambridge@gmail.com',
					password: 'password',
					admin: true,
					postal_code: 'N2L5L6',
					university: 'University of Waterloo'
				});
				var self = this;
				user.save().then(function (values) {
					self.set('alreadySignedUp', _ember['default'].get(values, 'alreadySignedUp'));
				});
			},
			foo: function foo() {
				console.log("selected!");
			},
			chooseUniversity: function chooseUniversity(uni) {
				this.set('uni', uni);
			}
		}
	});
});