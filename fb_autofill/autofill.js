$(document).bind('afterfbinit', function () {
	FB.getLoginStatus(checkUser);
	FB.Event.subscribe('auth.statusChange', checkUser);
});

// Additional permissions requested
var req_perm = 'user_birthday,email';

// ID of button to trigger autofill
var action_button = $('#fb_autofill');

function checkUser(response) {
	if (response.authResponse) {
		// user is already logged in and connected
		// check for appropriate permissions
		FB.api('/me/permissions', function (response) {
			if (response.data[0].email == 1 && response.data[0].user_birthday == 1) {
				action_button.click( function () {
					updateForm();
				});
			} else {
				getPerms(); // not correct permissions
			}
		});
	} else {
		getPerms(); // not connected to your app or logged out
	}
}

function getPerms() {
	action_button.click( function () {
		FB.login(function(response) {
			if (response.authResponse) {
				updateForm();
			} else {
				// user cancelled login or did not grant authorization
			}
		}, {scope:req_perm});
	});
}

function updateForm() {
	FB.api('/me', function(response) {
		// Fill first and last name
		$('[name="entry[name][first_name]"]').val(response.first_name);
		$('[name="entry[name][last_name]"]').val(response.last_name);

		// check for FB proxy email address which we are not allowed to use
		var userEmail = response.email;
		var emailCheck = userEmail.split('@');
		if ( emailCheck[1] != 'proxymail.facebook.com' ) {
			$('.engagements_field_email').find('input').val(userEmail);
		}

		function trimNumber(s) {
			return s.replace(/^0+/, '');
		}

		var birthday = response.birthday.split('/');
		var bmonth = trimNumber(birthday[0]);
		var bday = trimNumber(birthday[1]);
		var byear = birthday[2];
		
		// Select correct options for birthday as well as update the text if mobile
		$('[name="entry[birthday][year]"]').val(byear);
		$('[name="entry[birthday][year]"]').prev().find('.ui-btn-text').text(byear);

		if (bmonth === '1') {
			$('[name="entry[birthday][month]"]').val('1');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('January');
		} else if (bmonth === '2') {
			$('[name="entry[birthday][month]"]').val('2');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('February');
		} else if (bmonth === '3') {
			$('[name="entry[birthday][month]"]').val('3');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('March');
		} else if (bmonth === '4') {
			$('[name="entry[birthday][month]"]').val('4');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('April');
		} else if (bmonth === '5') {
			$('[name="entry[birthday][month]"]').val('5');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('May');
		} else if (bmonth === '6') {
			$('[name="entry[birthday][month]"]').val('6');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('June');
		} else if (bmonth === '7') {
			$('[name="entry[birthday][month]"]').val('7');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('July');
		} else if (bmonth === '8') {
			$('[name="entry[birthday][month]"]').val('8');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('August');
		} else if (bmonth === '9') {
			$('[name="entry[birthday][month]"]').val('9');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('September');
		} else if (bmonth === '10') {
			$('[name="entry[birthday][month]"]').val('10');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('October');
		} else if (bmonth === '11') {
			$('[name="entry[birthday][month]"]').val('11');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('November');
		} else if (bmonth === '12') {
			$('[name="entry[birthday][month]"]').val('12');
			$('[name="entry[birthday][month]"]').prev().find('.ui-btn-text').text('December');
		}

		$('[name="entry[birthday][day]"]').val(bday);
		$('[name="entry[birthday][day]"]').prev().find('.ui-btn-text').text(bday);

		action_button.hide();
	});
}