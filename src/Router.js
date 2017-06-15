import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Login from './components/Login';
import Logout from './components/Logout';
import NewsSources from './components/NewsSources';
import NewsArticles from './components/NewsArticles';
import User from './model/User';

const requireAuth = (nextState, replace) => {
  if (!User.isLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },

    });
  }
};

const checkAuth = (nextState, replace) => {
  if (User.isLoggedIn) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },

    });
  }
};

const App = () =>
   (
     <div>
       <Router history={hashHistory}>
         <Route path="/" component={NewsSources} onEnter={requireAuth} />
         <Route path="/articles/:id/:sort" component={NewsArticles} onEnter={requireAuth} />
         <Route path="/login" component={Login} onEnter={checkAuth} />
         <Route path="/logout" component={Logout} />
       </Router>
     </div>
  );

export default App;
