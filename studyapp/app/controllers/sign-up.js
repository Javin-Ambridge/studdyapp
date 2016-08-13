import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['uni'],
	alreadySignedUp: false,
	uni: null,
	selectedCourses: [],
	currentStep: 1,
	uniError: false,
	courseError: false,
	name: null,
	email: null,
	password: null,
	displayPassword: false,
	nameError: false,
	passwordError: false,
	emailError: false,
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
				if (this.get('selectedCourses').length == 0) {
					canContinue = false;
					this.set('courseError', true);
				}
				if (this.get('uni') === null) {
					canContinue = false;
					this.set('uniError', true);
				}
				if (canContinue) 
					this.set('currentStep', 2);
			} else if (this.get('currentStep') === 2) {
				var properName = false;
				var properEmail = false;
				var properPassword = false;

				if (this.get('name').replace(/.+\s.+/g, "").length != this.get('name').length)
					properName = true;
				if (this.get('email').replace(/.+@.+\..+/g, "").length != this.get('email').length)
					properEmail = true;
				if (this.get('password').length > 0)
					properPassword = true;

				if (properPassword && properEmail && properName) {
					var arr = [];
					for (var i = 0; i < this.get('selectedCourses').length; i++) {
						arr.push(this.get('selectedCourses')[i].id);
					}
					var user = this.store.createRecord('user', {
						name: this.get('name'),
						email: this.get('email'),
						password: this.get('password'),
						admin: false,
						university: this.get('uni').name,
						courses: arr
					});
					var self = this;
					user.save().then(function(values) {
						self.set('alreadySignedUp', Ember.get(values, 'alreadySignedUp'));
						if (self.get('alreadySignedUp')) {
							Ember.run.later((function() {
								self.set('alreadySignedUp', false);
							}), 2000);
						}
					});
				} else {
					if (!properName)
						this.set('nameError', true);
					if (!properEmail)
						this.set('emailError', true);
					if (!properPassword)
						this.set('passwordError', true);
				}
			}
		},
		prevStep() {
			this.set('currentStep', this.get('currentStep') - 1);
		},
		togglePassword() {
			this.set('displayPassword', !this.get('displayPassword'));
		}
	}
});

