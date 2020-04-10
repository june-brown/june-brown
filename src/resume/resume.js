var NewComponent = React.createClass({
  render: function () {
    return (

      <section id="resume">

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Clevyr</h3>
                <p className="info">Client Success Specialist <span>•</span> <em className="date">January 2020 - March 2020</em></p>
                <p>
                  Worked as a liaison between clients and developers to facilitate client needs, sprint work, and information.
                  Wrote articles based on business to business, development, and various other areas. Contributed to writing copy
                  and developing marketing for game apps.
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Deep Fork Technology</h3>
                <p className="info">Creative Director, Front End Developer<span>•</span> <em className="date">September 2019 - December 2019</em></p>
                <p>
                  Multiple roles of responsibility to support the team - project management, marketing, creative director, and
                  front end developer. Responsible for the mentorship of Junior Developer Intern and overseeing website creation
                  for various clients from consult to mockup to implementation and launch. Developed procedures for general
                  project management software and project implementation. Develop marketing materials for print and the company website.
                </p>
              </div>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Freelancer</h3>
              <p className="info">Technical and Business Writer<span>•</span> <em className="date">January 2012 - December 2019</em></p>
              <p>
                Provide a wide range of writing services and expertise to various clients, businesses, publications, and websites, including
                resumes and cover letters, articles, training material, writing prompts, how-to articles, press releases, contracts, technical
                reports, and web content. Conducted research identifying current trends and industry developments to be utilized to update and
                improve the existing technical content for various clients.
                </p>
            </div>
          </div>
          <div className="row item">
            <div className="twelve columns">
              <h3>Kemper</h3>
              <p className="info">Legal Assistant/Technical Writer<span>•</span> <em className="date">April 2017 - October 2018</em></p>
              <p>
              Provided a broad range of paraprofessional and administrative support services to the Legal Department's litigation office by preparing 
              both routine and specialized legal documents and correspondence and oversaw the day to day operations and support activities. Assisted in 
              contract preparation, completion, and administration, screened requests for legal action or information, providing referrals to other 
              counsel or notification to Legal Department management as appropriate.
                </p>
            </div>
          </div>
        </div>



        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">

                <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                <li><span className="bar-expand nodejs" /><em>Node.js</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand sql" /><em>SQL</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
});