import Ember from 'ember';

export default Ember.Controller.extend({
	alreadySignedUp: false,
	uni: null,
	selectedCourses: [],
	currentStep: 1,
	uniError: false,
	courseError: false,
	universities: 
	[
		{
			name: 'University of Waterloo'
		},
		{
			name: 'Wilfred Laurier'
		}
	],
	courses: 
	[
		{
			name: 'Combinatorics',
			id: 'Math239'
		},
		{
			name: 'Data Structures and Data Managment',
			id: 'CS240'
		},
		{
			name: 'Foundations of Sequential Programs',
			id: 'CS241'
		},
		{
			name: 'Computer Organization and Design',
			id: 'CS251'
		}
	],

	accountAlreadyCreated: Ember.computed('alreadySignedUp', function() {
		return this.get('alreadySignedUp');
	}),

	anyCourses: Ember.computed('selectedCourses.[]', function() {
		var any = this.get('selectedCourses').length > 0;
		if (any && this.get('courseError')) {
			this.set('courseError', false);
		}
		return any;
	}),

	actions: {
		saveUser() {
			var user = this.store.createRecord('user', {
				name: 'Javin Ambridge',
				email: 'javin.ambridge@gmail.com',
				password: 'password',
				admin: true,
				university: 'University of Waterloo',
				courses: ['Math239', 'CS241', 'CS240', 'CS251']
			});
			var self = this;
			user.save().then(function(values) {
				self.set('alreadySignedUp', Ember.get(values, 'alreadySignedUp'));
			});
		},
		addCourse(course) {
			var curr = this.get('selectedCourses');
			curr.addObject(course);
			this.set('selectedCourses', curr);
		},
		removeCourse(index) {
			this.get('selectedCourses').removeAt(index);
		},
		chooseUniversity(uni) {
			if (this.get('uniError'))
				this.set('uniError', false);
			this.set('uni', uni);
		},
		nextStep() {
			if (this.get('currentStep') === 1) {
				var canContinue = true;
				if (!this.get('anyCourses'))
					canContinue = false;
					this.set('courseError', true);
				if (this.get('uni') === null)
					canContinue = false;
					this.set('uniError', true);
				if (canContinue) 
					this.set('currentStep', 2);
			}
		}
	}
});

