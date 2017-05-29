import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import User from '../model/User';
import Footer from './layout/Footer.jsx'

const history = createHistory({
	forceRefresh: true,
});


class Login extends Component {
	componentWillMount() {
		if (User.isLogin) {
			history.push('/');
		}
	}

	render() {
		const responseGoogle = (response) => {
			User.login(response);
			window.location.reload();
		};
		return (
			<div>
				<div className='loginbody'>
					<div className='container-fluid text-center'>
						<h1>headlines</h1>
						<p className='login-para'>View news headlines as it comes out</p>
						<p className='login-para'>Stay up to date with news around the world</p>
	
						<GoogleLogin
							className='login'
							clientId='869248524764-gq40n0trb23md1r6op4b2v23qgdb6bj6.apps.googleusercontent.com'
							buttonText='Login'
							uxMode='popup'
							onSuccess={responseGoogle}
							onfailure={responseGoogle}
						>
						<span className='login-img'><img src='../img/google.png' alt='google login' /></span>
						</GoogleLogin>
					</div>
				</div>
					<div><Footer /></div>
			</div>
		);

	}
}

export default Login;
