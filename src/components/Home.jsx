import React, { Component } from 'react';
import Project from './Project';
import Blog from './Blog';
import Logo from './Logo';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Project />
        <Logo />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
