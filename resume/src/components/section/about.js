import React, { Component } from 'react';

class About extends Component {
  render (){
    return(
      <React.Fragment>
        <section id="about" className="s-about target-section">
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full text-center">
            <h3>About</h3>
            <h1>More About Me</h1>
            <p className="lead">I'm a Computer Science student at UFF (Fluminense Federal University), based in Niterói-RJ / Brazil, interested in the follow areas: Game Development, VR, AR and CG. I always look for experiences that allow me to realize innovations and that can offer me personal and professional growth.</p>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-six tab-full left">
            <h3>Hello!</h3>
            <p>
              My name is Bruno Locha Gomes Oliveira, i'm a brazilian developer and a bachelor student at UFF, passionate about games, VR, AR and most off the real time render technologies.
            </p>
            <p>
              Most of my prefered skills are represented in this chart, but i'm pretty adaptable and really open to learn any new technologies.
              I got experience in remote and freelancer work and look foward to new challenges
            </p>
          </div>
          <div className="col-six tab-full right">
            <h3>I've Got Some skills.</h3>
            <ul className="skill-bars">
              <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>Unity</strong>
              </li>
              <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>C#</strong>
              </li>
              <li>
                <div className="progress percent80"><span>80%</span></div>
                <strong>Java</strong>
              </li>
              <li>
                <div className="progress percent75"><span>75%</span></div>
                <strong>Ruby on Rails</strong>
              </li>
              <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>C++</strong>
              </li>   
              <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>Android Studio</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="row about-content about-content--buttons">
          <div className="col-six tab-full">
            <a href="#0" className="btn btn--primary full-width">Download My CV</a>
          </div>
        </div>
        <div className="row about-content about-content--timeline">
          <div className="col-full text-center">
            <h3>My Professional Experiences.</h3>
          </div>
          <div className="col-six tab-full left">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">February 2019 - Today</p>
                  <h3>Aiyra Game Studio</h3>
                  <h5>Game / App Developer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Development off Games and complete applications, most using the Unity engine, including loading of assets by server (asset bundle). Development and implementation of UI, general UX and plugins.</p>
                </div>
              </div> {/* end timeline__block */}
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">November 2018 - January 2020</p>
                  <h3>TecZelt</h3>
                  <h5>Development Intern</h5>
                </div>
                <div className="timeline__desc">	
                  <p>Development and maintenance off FazGame, an online game creation plataform (www.fazgame.com.br). Game system is made using Unity3D (WebGL), and is integrated with an Website made in RubyOnRails</p>
                </div>
              </div> {/* end timeline__block */}
            </div> {/* end timeline */}
          </div> {/* end left */}
          {/*
          <div className="col-six tab-full right">
            <div className="timeline">
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2012 - June 2014</p>
                  <h3>Great Design Studio</h3>
                  <h5>Web Designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                </div>
              </div> 
              <div className="timeline__block">
                <div className="timeline__bullet" />
                <div className="timeline__header">
                  <p className="timeline__timeframe">July 2011 - June 2012</p>
                  <h3>Epic Design Agency</h3>
                  <h5>Web Designer</h5>
                </div>
                <div className="timeline__desc">
                  <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div> {/* end about-content timeline */}
      </section> {/* end about */}
      </React.Fragment>
    );
  }
};

export default About;




