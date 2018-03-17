import React, { Component } from 'react';
import logo from './logo.png';

class Nav extends Component {
  render() {
    return (
      <div>
        
     <nav className="topbar topbar-inverse topbar-expand-sm topbar-sticky">
      <div className="container">
        
        <div className="topbar-left">
          <button className="topbar-toggler">&#9776;</button>
          <a className="topbar-brand" href="/">
            <img className="logo-default" src={logo} alt="logo" />
            <img className="logo-inverse" src={logo} alt="logo" />
          </a>
        </div>


      </div>
    </nav>  
       
      </div>
    );
  }
}

export default Nav;
