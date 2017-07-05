import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import User from '../model/User';

const clientId = process.env.CLIENT_ID;

/**
 * @class Login
 * @extends {Component}
 */
class Login extends Component {

  render() {
    const responseGoogle = (response) => {
      User.login(response);
      browserHistory.push('/');
      location.reload();
    };
    return (
      <div className="outline">
        <div className="loginbody">
          <div className="container-fluid text-center">
            <h1>headlines</h1>
            <p className="loginpara">View news headlines as it comes out</p>
            <p className="loginpara">Stay up to date with news around the world</p>

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
