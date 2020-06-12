import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/*generated code*/}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                June Brown is a Front End Developer, technical writer, and artist based in Oklahoma City. As a developer her primary focus is JavaScript, React, HTML, and CSS with a continued drive to learn new frameworks and languages. She is currently available for hire.
              </p>
              <p>

                She is a former professional game master and steampunk. She loves painting, knitting, and supporting her local arts community. She is mom of two boys, chronicling their misadventures through childhood and cosplay in her blog Curious Life of Hobbits.

                June is also a published Occult/Paranormal Author, her current book available in the U.S. and E.U. – Turning the Table: A Look at the Victorian Supernatural Obsession[available on Amazon].She has lectured on Victorian Paranormal at conventions and conferences across the U.S.

                She is a voice actor lending her voice to bring Rhayne’s Co A.I. to life in the web series Tales of a Broken Reality. She loves taking the stage at local open mics as a stand-up comedian.
     </p>
     <br />
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>June Brown</span><br />
                    <span>1118 NW 27th Street<br />
             Oklahoma City, OK 73106 US
           </span><br />
                    <span>405.549.9952</span><br />
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="./june-brown-resume.pdf" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}















