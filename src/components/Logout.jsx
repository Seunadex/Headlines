import { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import User from '../model/User';

const history = createHistory({
  forceRefresh: true,
});

/**
 * @class Logout
 * @extends {Component}
 */
class Logout extends Component {
  /**
   * @method
   * @returns {void}
   * @memberof Logout
   */
  componentWillMount() {
    if (User.isLoggedIn) {
      User.logOut();
      history.push('/#/login');
      window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}

export default Logout;
