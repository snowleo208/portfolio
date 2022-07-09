import React, { useLayoutEffect } from 'react';
import {
  useLocation, useMatch, Routes, Route,
} from 'react-router-dom';
import { styled, globalCss } from '@stitches/react';

import { Menu } from './Menu/Menu';
import Home from './Page/Home';
import About from './Page/About';
import ProjectPage from './Page/ProjectPage';
import ContactPage from './Page/ContactPage';
import { ProjectDetails } from './ProjectDetails';
import { Footer } from './Utils/Footer';

const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const Layout = styled('div', {
  variants: {
    layout: {
      default: {
        padding: '0 1rem',
        '@media only screen and (min-width : 992px)': {
          maxWidth: 1140,
          margin: '0 auto',
          padding: '4em 1em',
        },
      },
    },
    homepage: {

    },
  },
});

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: "'Nunito Sans', sans-serif",
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontSize: '1rem',
    lineHeight: 1.48,
    color: 'rgb(95, 95, 95)',
  },
  a: {
    textDecoration: 'none',
  },
  'h1,h2,h3,h4,h5,h6': {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    color: 'rgb(23, 23, 23)',
  },
  h1: {
    fontSize: '2em',
    margin: '0 0 0.7em 0',
  },
  h2: {
    fontSize: '1.5em',
    margin: '0 0 0.8em 0',
  },
  h3: {
    fontSize: '1.17em',
    margin: '0 0 0.83em 0',
  },
});

function App() {
  const location = useLocation();
  const isHomepage = useMatch('/');
  const isProjectDetailsPage = useMatch('/project/:url');
  const isFullWidth = isHomepage || isProjectDetailsPage;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  globalStyles();
  return (
    <AppContainer>
      {!isHomepage && <Menu />}
      <Layout layout={isFullWidth ? undefined : 'default'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:url" element={<ProjectDetails />} />
        </Routes>
      </Layout>
      <Footer />
    </AppContainer>
  );
}

export default App;
