import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../Menu';
import Contact from '../Contact';

class ProjectPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Contact | Yuki Cheung</title>
        </Helmet>
        <Menu />
        <Contact />
      </React.Fragment>
    );
  }
}

export default ProjectPage;
