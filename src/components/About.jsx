import React, { Component } from 'react';
import Header from './Header';
// import * as json from './portfolio.json';

class About extends Component {
  render() {
    // const translate = json.default;
    return (
      <React.Fragment>
        <Header />
        <h1>About</h1>
        <p>Menu</p>
      </React.Fragment>
    );
  }
}

export default About;
