import Ember from 'ember';

export default Ember.Controller.extend({
	alreadySignedUp: false,
	uni: null,
	universities: 
	[
		{
			name: 'University of Waterloo'
		},
		{
			name: 'Wilfred Laurier'
		}
	],
	courses: ['course1', 'course2', 'course3'],

	accountAlreadyCreated: Ember.computed('alreadySignedUp', function() {
		return this.get('alreadySignedUp');
	}),

	actions: {
		saveUser() {
			var user = this.store.createRecord('user', {
				name: 'Javin Ambridge',
				email: 'javin.ambridge@gmail.com',
				password: 'password',
				admin: true,
				postal_code: 'N2L5L6',
				university: 'University of Waterloo'
			});
			var self = this;
			user.save().then(function(values) {
				self.set('alreadySignedUp', Ember.get(values, 'alreadySignedUp'));
			});
		},
		foo() {
			console.log("selected!");
		},
		chooseUniversity(uni) {
			this.set('uni', uni);
		}
	}
});

