import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import createHistory from 'history/createBrowserHistory';
import User from '../model/User';

const history = createHistory({
    /**
     * Cause a full page refreshes
     */
  forceRefresh: true,
});

const clientId = process.env.CLIENT_ID;

/**
 * 
 * 
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
  componentWillMount() {
    if (User.isLoggedIn) {
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
        <div className="loginbody">
          <div className="container-fluid text-center">
            <h1>headlines</h1>
            <p className="login-para">View news headlines as it comes out</p>
            <p className="login-para">Stay up to date with news around the world</p>

            <GoogleLogin
              className="login"
              clientId={clientId}
              buttonText="Sign in with Google"
              uxMode="popup"
              onSuccess={responseGoogle}
              onfailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
