import React, { Component } from 'react';

class Logo extends Component {
  render (){
    return(
      <React.Fragment>
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
          </a>
        </div>
      </React.Fragment>
    );
  }
};

export default Logo;