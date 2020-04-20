import React, { Component } from 'react';

class Logo extends Component {
  render (){
    return(
      <React.Fragment>
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src="images/logo.png" alt="Homepage" /></a>
        </div>
        </React.Fragment>
    );
  }
};

export default Logo;