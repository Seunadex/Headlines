import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Login from './components/Login.jsx';
import NewsSources from './components/NewsSources.jsx';
import NewsArticles from './components/NewsArticles.jsx';
import axios from 'axios';
import User from './model/User.jsx';

// function requireAuth(nextState, replace) {
//   if (!User.isLogin) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }

//     });
//   }
// }

// function checkAuth(nextState, replace) {
//   if (User.isLogin) {
//     replace({
//       pathname: '/',
//       state: { nextPathname: nextState.location.pathname }

//     });
//   }
// }

const App = () =>
   (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={NewsSources} />
             <Route path="/articles/:id/:sort" component={NewsArticles} />
      
         </Router>
         <Footer />
       </div>
  );

export default App;
