import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
	this.route('dashboard');
=======
	this.route('landing', { path: '/'});
>>>>>>> origin
  this.route('quote');
  this.route('sign-up');
  this.route('login');
});

export default Router;
