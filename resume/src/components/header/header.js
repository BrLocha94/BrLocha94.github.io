import React, { Component } from 'react';
import Logo from './logo'
import Nav from './nav'

class Header extends Component {
  render (){
    return(
      <React.Fragment>
      <header className="s-header">
        <Logo />
        <Nav />
        <a className="header-menu-toggle" href="#0"><span>Menu</span></a>
      </header>
      </React.Fragment>
    );
  }
};

export default Header;




