var NewComponent = React.createClass({
    render: function() {
      return (
  
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I am a Front End Developer and consultant based in Oklahoma City. As a developer, my primary focus is design, 
                experience, and user interaction with a continued drive to learn new frameworks and languages. I am a published 
                Paranormal Historian specializing in the Victorian Era. I am a passionate creative-type with a deep love for programming. 
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>June Brown</span><br />
                    <span>1118 NW 27th Street<br />
                      Oklahoma City, OK 73106 US
                    </span><br />
                    <span>405.549.9952</span><br />
                    <span>https://github.com/june-brown</span>
                    <span>https://junebrown.journoportfolio.com/</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> 
            </div> 
          </div>
        </section>
      );
    }
  });