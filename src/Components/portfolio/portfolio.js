import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/tower-theater.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>"Tower Theater"</h5>
                        <p>Digital Art - Historical Tower Theater of OKC</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="blur-space-github" src="images/portfolio/blur-space.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Blur and Space Photo Fun</h5>
                        <p>JavaScript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/clock.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Clock</h5>
                        <p>JavaScript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/blackjack.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Black Jack</h5>
                        <p>JavaScript</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/tower-theater.jpg" alt="tower theater" />
            <div className="description-box">
              <h4>...</h4>
              <p>...</p>
              <span className="categories"><i className="fa fa-tag" />Digital Illustration</span>
            </div>
            <div className="link-box">
              <a href="https://www.redbubble.com/shop/ap/48959206">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/blur-space.jpg" alt="blur and space" />
            <div className="description-box">
              <p>JavaScript 30 Challenge Exercise</p>
              <span className="categories"><i className="fa fa-tag" />JavaScript Project</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/june-brown/Blur-and-Space-Photo-Fun">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/clock.jpg" alt="desktop clock" />
            <div className="description-box">
              <p>JavaScript 30 Challenge Exercise</p>
              <span className="categories"><i className="fa fa-tag" />JavaScript Project</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/june-brown/Clock">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/blackjack.jpg" alt="black jack game" />
            <div className="description-box">
              <p>Black Jack Game</p>
              <span className="categories"><i className="fa fa-tag" />JavaScript Project</span>
            </div>
            <div className="link-box">
              <a href="...">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}