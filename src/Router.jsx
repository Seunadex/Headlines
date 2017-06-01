import React from 'react';
import { Router, Route,IndexRoute, hashHistory } from 'react-router';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';
import NewsSources from './components/NewsSources.jsx';
import NewsArticles from './components/NewsArticles.jsx';
import User from './model/User.jsx';

const requireAuth = (nextState, replace) => {
  if (!User.isLogin) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }

    });
  }
}

const checkAuth = (nextState, replace) => {
  if (User.isLogin) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }

    });
  }
}

const App = () =>
   (
      <div>
        <Router history={hashHistory}>
        		<Route exact path="/" component={NewsSources} onEnter={requireAuth}>
             <Route path="/articles/:id/:sort" component={NewsArticles} onEnter={requireAuth} />
     	 	</Route>
      		<Route path="/login" component={Login} onEnter={checkAuth}/>
      		<Route path="/logout" component={Logout} />
         </Router>
       </div>
  );

export default App;
