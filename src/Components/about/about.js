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
                I am a Front End Developer, technical writer, and artist based in Oklahoma City. As a developer my primary focus is JavaScript, React, HTML, and CSS with a continued drive to learn new frameworks and languages. I am currently available for hire.
              </p>
              <p>

                I am former professional game master and steampunk. I love painting, knitting, and supporting the local arts community. I am a mom of two boys and enjoy chronicling their misadventures through childhood and cosplay in my blog Curious Life of Hobbits.

                I am also a published Occult/Paranormal Author, my current book available in the U.S. and E.U. – Turning the Table: A Look at the Victorian Supernatural Obsession [available on Amazon].I have lectured on Victorian Paranormal at conventions and conferences across the U.S.

                I am also a voice actor lending my voice to bring Rhayne’s Co A.I. to life in the web series Tales of a Broken Reality. One of my hobbies is taking the stage at local open mics as a stand-up comedian.
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
                    <a href="https://bit.ly/3e7VTg4" className="button"><i className="fa fa-download" />Download Resume</a>
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















