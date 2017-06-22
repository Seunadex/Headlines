import React,{ Component } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import Login from './components/Login';
import Logout from './components/Logout';
import NewsSources from './components/NewsSources';
import NewsArticles from './components/NewsArticles';
import User from './model/User';

class App extends Component {
 constructor() {
  super ();
  this.requireAuth = this.requireAuth.bind(this);
  this.verifyAuth = this.verifyAuth.bind(this);
 }

requireAuth(nextState, replace) {
    if (!User.isLoggedIn) {
      replace({
        pathname: '/login',
      })
    }
};

verifyAuth(nextState, replace) {
  if (User.isLoggedIn) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },

    });
  }
};

render() {
  return (

     <div>
       <Router history={hashHistory}>
         <Route path="/" component={NewsSources} onEnter={this.requireAuth} />
         <Route path="/articles/:id/:sort" component={NewsArticles} onEnter={this.requireAuth} />
         <Route path="/login" component={Login} onEnter={this.verifyAuth} />
         <Route path="/logout" component={Logout} />
       </Router>
     </div>
  );
}

  
};


export default App;
