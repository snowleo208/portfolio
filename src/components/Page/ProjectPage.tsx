import React from 'react';
import { Helmet } from 'react-helmet';
import { Project } from '../Project';

function ProjectPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Yuki Cheung</title>
      </Helmet>
      <Project />
    </>
  );
}

export default ProjectPage;
