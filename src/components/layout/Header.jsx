import React from 'react';
import User from '../../model/User';
/**
 *@description header element
 *@returns {*} element to be rendered
 */
function Header() {
  const fullName = User.name.split(' ');
  const firstName = fullName[0];
  console.log(firstName);
  return (
    <div className="navtop">
      <nav className="navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs" aria-expanded="false"
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
                <a><i className="fa fa-user-circle" aria-hidden="true"></i> {firstName}</a>
              </li>
              <li>
                <a href="/#/logout">
                  <span className="glyphicon glyphicon-log-out" />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;