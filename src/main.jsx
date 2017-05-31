import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Login';
import '../public/styles/custom.scss';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';

ReactDOM.render(
	<Router>
			<Route exact path='/' component={Login}/>
	</Router>,
	document.getElementById('app')
	);
