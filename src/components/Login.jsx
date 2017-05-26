import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
	/**
		* function for responseSuccess
		* saves user profile to local storage
		* reloads page
		*/

		const responseSuccess = (googleUser) => {
			const userProfile = googleUser.getBasicProfile();
			localStorage.setItem('User', JSON.stringify({
				iD: userProfile.getId(),
				name: userProfile.getName(),
				email: userProfile.getEmail()
			}));
			location.reload();
		};

		const id = process.env.ID;

		/**
			* Function for responseFailure
			* Logs out error
			*/
		const responseFailure = (response) => {
			console.log(response);
		};

		return (
			)
}
