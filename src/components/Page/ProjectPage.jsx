import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../Menu';
import Project from '../Project';

class ProjectPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Projects | Yuki Cheung</title>
        </Helmet>
        <Menu />
        <Project />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
