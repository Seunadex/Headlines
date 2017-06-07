import { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import User from '../model/User';

const history = createHistory({
     /**
     * Cause a full page refreshes
     */
  forceRefresh: true,
});

class Logout extends Component {
  componentWillMount() {
    if (User.isLogin) {
      User.logOut();
      history.push('/#/login');
      window.location.reload();
    } else {
      history.push('/#/login');
    }
  }
}

export default Logout;
