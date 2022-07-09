import React from 'react';
import Helmet from 'react-helmet';
import {Header} from '../Utils/Header';
import Project from '../Project';
import Blog from '../Blog';
import {Logo} from '../Logo';
import Contact from '../Contact';

const Home = () => (
  <div>
        <Helmet>
          <title>Portfolio | Yuki Cheung</title>
        </Helmet>
        <Header />
        <Project />
        <Logo />
        <Blog />
        <Contact />
      </div>
)

export default Home;
