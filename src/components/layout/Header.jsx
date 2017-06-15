import React from 'react';
import User from '../../model/User';
/**
 *@description header element
 *@returns {*} element to be rendered
 */
const Header = () => {
  const image = User.imageUrl;
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
              <li>
                <p>Welcome</p>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <img src={image} alt="img" className="img-circle" />
                  <span className="caret" /></a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/#/logout">
                      <i className="fa fa-sign-out" aria-hidden="true" />
                  Sign Out
                </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
