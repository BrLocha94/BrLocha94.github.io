import React, { Component } from 'react';
import Home from './home'
import About from './about'
import Works from './works'

class Body extends Component {
  render (){
    return(
      <React.Fragment>
        <Home />
        <About />
        <Works />
      </React.Fragment>
    );
  }
};

export default Body;




