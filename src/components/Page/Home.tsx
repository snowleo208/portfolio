import React from 'react';
import Helmet from 'react-helmet';
import {Header} from '../Utils/Header';
import {Project} from '../Project';
import Blog from '../Blog';
import {Logo} from '../Logo';
import {Contact} from '../Contact';
import { Layout } from '../App';

const Home = () => (
  <div>
        <Helmet>
          <title>Portfolio | Yuki Cheung</title>
        </Helmet>
        <Header />
        <Project />
        <Logo />
        <Blog />
        <Layout layout="default">
          <Contact />
        </Layout>
      </div>
)

export default Home;
