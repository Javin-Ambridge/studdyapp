import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service("session"),
	newPasswordValid: true,
	passwordsMatch: true,
	oldPasswordValid: true,
	actions: {
		ChangePassword() {
				var curPassword = this.get('CurrentPassword');
				var newPassword1 = this.get('NewPassword');
				var newPassword2 = this.get('NewPassword2');
				var canChangePassword = false;

				var emailSession = this.get('session.currentUser');//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				console.log("email is " + emailSession);
				if (curPassword === null) {
					console.log("Must enter a current password.");
				} else if ((newPassword1 === null) || (newPassword1 === "")) {
					console.log("Must enter a new password.");
				} else if ((newPassword2 === null) || (newPassword2 === "")) {
					console.log("Must enter a valid password entry.");
				} else if (newPassword1 !== newPassword2) {
					console.log("Passwords do not match.");
					this.set('passwordsMatch', false);
				} else if (!isValidPassword(newPassword1)) {
					console.log("Password must be between 6 and 16 characters long, and contain only contain letters, numbers, and !@#\$%\^\&*\)\(+=._-");
					this.set('newPasswordValid', false);
				} else {
					canChangePassword = true;
				}
				if (canChangePassword === false) {
				//	failAlert('canChangePassword');
				console.log("Cannot Change Password");
					return false;
				}

				console.log("Passed prelim");

				this.get('store').queryRecord('user', {
					params: {
						check: true
					},
				  filter: {
				    email: emailSession
				  }
				}).then(function(loginUser) {
					loginUser.set('password',newPassword1);
				}); 
		}
	}
});

function isValidPassword(newPassword) {
  var regExpr1 = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,16}$/g;
  var passwordLength = newPassword.length;
  if (passwordLength < 6 || passwordLength > 16) {
    return false;
  }
  if (!regExpr1.test(newPassword)) {
    alert("Password must be between 6 and 16 characters long, and contain only contain letters, numbers, and no special characters");
    return false;
  }
  return true;
}
