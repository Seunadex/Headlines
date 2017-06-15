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

const client_id = process.env.CLIENT_ID;


class Login extends Component {
  componentWillMount() {
      /**
       * check if the user is logged in
       * push, replace, and go to navigate around
       */
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
              clientId={client_id}
              buttonText="Login"
              uxMode="popup"
              onSuccess={responseGoogle}
              onfailure={responseGoogle}
            >
              <a className="btn btn-danger">
                Sign in with Google
                </a>
            </GoogleLogin>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
