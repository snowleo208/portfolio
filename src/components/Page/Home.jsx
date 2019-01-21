import React, { Component } from 'react';
import Header from '../Utils/Header';
import Project from '../Project';
import Blog from '../Blog';
import Logo from '../Logo';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Project />
        <Logo />
        <Blog />
        <Contact />
      </div>
    );
  }
}

export default Home;
