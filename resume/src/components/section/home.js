import React, { Component } from 'react';

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
          <div className="overlay" />
          <div className="shadow-overlay" />
          <div className="home-content">
            <div className="row home-content__main">
              <h3>Welcome</h3>
              <h1>
                I'm Bruno Locha <br />
                m a game developer <br />
                based in Niteroi/RJ.
              </h1>
              <div className="home-content__buttons">
                <a href="#works" className="smoothscroll btn btn--stroke">
                  Latest Projects
                </a>
                <a href="#about" className="smoothscroll btn btn--stroke">
                  + About Me
                </a>
              </div>
              <div className="home-content__scroll">
                <a href="#about" className="scroll-link smoothscroll">
                  <span>Scroll Down</span>
                </a>
              </div>
            </div>
          </div> {/* end home-content */}
          <ul className="home-social">
            <li>
              <a href="#"><i className="im im-linkedin" aria-hidden="true" /><span>Linkedin</span></a>
            </li>
            <li>
              <a href="#"><i className="im im-github" aria-hidden="true" /><span>GitHub</span></a>
            </li>
          </ul> 
        </section>
      </React.Fragment>
    )
  }
}

export default Home;