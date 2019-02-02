import React, { Component } from 'react';
import Menu from '../Menu';
import Contact from '../Contact';

class ProjectPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Contact />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
