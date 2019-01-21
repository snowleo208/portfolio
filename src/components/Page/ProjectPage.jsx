import React, { Component } from 'react';
import Menu from '../Menu';
import Project from '../Project';

class ProjectPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Project />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
