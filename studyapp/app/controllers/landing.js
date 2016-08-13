import Ember from 'ember';

export default Ember.Controller.extend({
	uni: null,
	uniError: false,
	universities: 
	[
		{
			name: 'University of Waterloo',
			shortHand: 'UW'
		},
		{
			name: 'University of Toronto',
			shortHand: 'UofT'
		},
		{
			name: 'Wilfred Laurier University',
			shortHand: 'WLU'
		}
	],

	actions: {
		chooseUniversity(uni) {
			if (this.get('uniError'))
				this.set('uniError', false);
			this.set('uni', uni);
		},
		submitUni: function() {
			var uniName = this.get('uni').shortHand;
			this.transitionTo('sign-up', { queryParams: {uni: uniName}});
  	}
	}
});

