import React from 'react';
import User from '../../model/User';
/**
 *@description header element
 *@returns {*} element to be rendered
 */
const Header = () => {
  const fullName = User.name.split(' ');
  const image = User.imageUrl;
  const firstName = fullName[0];
  return (
    <div className="navtop">
      <nav className="navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand">News Feed</a>
          </div>
          <div className="collapse navbar-collapse" id="bs">
            <ul className="nav navbar-nav">
              <li><a href="/">Home</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nohover">
                <a><i className="fa fa-user" aria-hidden="true" /> {firstName}</a>
              </li>
              <li>
                <img src={image} alt="img" className="img-circle" />
              </li>
              <li>
                <a href="/#/logout">
                  <span className="glyphicon glyphicon-log-out" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
