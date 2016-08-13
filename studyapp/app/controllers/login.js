import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service("session"),
	email: null,
	password: null,

	actions: {
		authenticate() {
			this.get('session').authenticate('authenticator:oauth2', 'USERNAME',
			 'PASSWORD').catch((reason) => {
			 		console.log("ERROR: " + reason);
			 });
		}
	}
});