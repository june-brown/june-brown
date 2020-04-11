import React from 'react'

var testimonials = React.Component({
    render: function() {
      return (
       
        
          <section id="testimonials">
            <div className="text-container">
              <div className="row">
                <div className="two columns header-col">
                  <h1><span>Testimonials</span></h1>
                </div>
                <div className="ten columns flex-container">
                  <div className="flexslider">
                    <ul className="slides">
                      <li>
                        <blockquote>
                          <p>Working with June is awesome. In addition to planning and executing blog posts and marketing 
                            material, June has been a resource for me on several internal and client-facing projects. She 
                            code-switches between software documentation, sales-speak, and legal writing with ease and fluency, 
                            and has a knack for adjusting voice and tone to perfectly meet an audience. Combined with her deep 
                            understanding of software development processes, June is an asset for any team.
                          </p>
                          <cite>Anne Smith Saunders, Business Analyst with Clevyr</cite>
                        </blockquote>
                      </li> 
                      <li>
                        <blockquote>
                          <p>June is eager to take on all tasks that are asked of her and proactive in helping to complete other 
                            tasks. She has a wide range of knowledge and set of skills. She is easy to work with and up for a challenge. 
                            She takes direction well and is willing to speak up when she has new ideas. She’s a strong team player and 
                            contributor as well as a natural born leader.
                          </p>
                          <cite>Dejanae Berry, Project Manager with Clevyr</cite>
                        </blockquote>
                      </li> 
                      <li>
                      <blockquote>
                        <p>June is talented, creative, and amazing to work with. She is able to clearly and effectively communicate with
                        both clients and developers. She has drive to it takes to see through complicated situations and does it with 
                        a smile on her face.
                        </p>
                        <cite>Amber Hayes, Software Engineer with Clevyr</cite>
                      </blockquote>
                      </li>
                    </ul>
                  </div> 
                </div> 
              </div> 
            </div>  
          </section> 
        
      );
    }
  });

export default testimonials;