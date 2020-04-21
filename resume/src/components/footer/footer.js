import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <React.Fragment>
      <div className="App">
      <footer>
      <div className="row">
        <div className="col-full">
          <div className="footer-logo">
            <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
          </div>
          <ul className="footer-social">
            <li><a href="#0">
                <i className="im im-facebook" aria-hidden="true" />
                <span>Facebook</span>
              </a></li>
            <li><a href="#0">
                <i className="im im-twitter" aria-hidden="true" />
                <span>Twitter</span>
              </a></li>
            <li><a href="#0">
                <i className="im im-instagram" aria-hidden="true" />
                <span>Instagram</span>
              </a></li>
            <li><a href="#0">
                <i className="im im-behance" aria-hidden="true" />
                <span>Behance</span>
              </a></li>
            <li><a href="#0">
                <i className="im im-pinterest" aria-hidden="true" />
                <span>Pinterest</span>
              </a></li>
          </ul>
        </div>
      </div>
      <div className="row footer-bottom">
        <div className="col-twelve">
          <div className="copyright">
            <span>© Copyright Bruno Locha 2020</span> 
            <span>Thanks <a href="https://www.styleshout.com/">Styleshout</a> For This Amazing Design</span>	
          </div>
          <div class="go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"><i class="im im-arrow-up" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </footer>

      </div>
      </React.Fragment>
    );
  }
}



export default Footer;
