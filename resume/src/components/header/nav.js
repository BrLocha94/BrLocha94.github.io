import React, { Component } from 'react';

class Nav extends Component {
  render (){
    return(
      <React.Fragment>
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
            <li><a className="smoothscroll" href="#about" title="about">About</a></li>
            <li><a className="smoothscroll" href="#projects" title="works">Projects</a></li>
            <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
          </ul>
        </nav>
        </React.Fragment>
    );
  }
};

export default Nav;