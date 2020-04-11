import React, { Component } from 'react';
import Header from './header/header'
import About from './about/about';
import Resume from './resume/resume';
import Portfolio from './portfolio/portfolio';
import Testimonials from  './testimonials/testimonials';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}
export default App;
