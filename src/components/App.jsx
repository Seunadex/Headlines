import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './layout/Header.jsx';


function App(props) {
	return (
		<div className='App'>
			<div><Header /></div>
			{props.children}
		</div>
			);
}

export default App;

App.defaultProps = {
	children: () => undefined
};

App.propTypes = {
	children: PropTypes.element
};