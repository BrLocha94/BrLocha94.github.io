import React, { Component } from 'react';
import './works.css';

class Works extends Component {
  render (){
    return(
      <React.Fragment>
        <section id="works" className="s-works target-section">
        
        <div className="row narrow section-intro has-bottom-sep">
          <div className="col-full">
            <h3>Portfolio</h3>
            <h1>See My Latest Projects.</h1>
            <p className="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
          </div>

            {/* WORK FLIP CARD WITH DESCRIPTION */}
            <div className="col-six tab-full left">
              <input type="checkbox" id="switch" />
              
              <label class="flip-container" for="switch" >
                <div class="flipper">
                  <div class="front">
                    <img src="https://picsum.photos/id/411/300/200" />
                  </div>
                  <div class="back">
                    <img src="https://picsum.photos/id/249/300/200" />
                  </div>
                </div>
              </label>
            </div>
            <div className="col-six tab-full right">
              <h3>TITULO</h3>
              <p>Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
            </div>

          </div>

        <div className="row masonry-wrap"/>

      </section>
      </React.Fragment>
    );
  }
};

export default Works;
