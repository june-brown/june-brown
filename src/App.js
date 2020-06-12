import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/header/header';
import About from './Components/about/about';
import Resume from './Components/resume/resume';
import Portfolio from './Components/portfolio/portfolio';
import References from './Components/references/references';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <References />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
