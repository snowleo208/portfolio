import React from 'react';
import { Helmet } from 'react-helmet';
import {Project} from '../Project';

const ProjectPage = () => (
  <>
  <Helmet>
          <title>Projects | Yuki Cheung</title>
        </Helmet>
        <Project />
        </>
)

export default ProjectPage;
