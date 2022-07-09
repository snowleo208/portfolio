import React from 'react';
import { styled, globalCss } from '@stitches/react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import ProjectPage from './Page/ProjectPage';
import ContactPage from './Page/ContactPage';
import ProjectDetails from './ProjectDetails';
import {Footer} from './Utils/Footer';
import Menu from './Menu';

const AppContainer = styled('div', {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
});

export const Layout = styled('div', {
  variants: {
    layout: {
      default: {
        padding: '0 1rem',
        "@media only screen and (min-width : 992px)": {
            maxWidth: 1140,
            margin: '0 auto',
            padding: "4em 1em"
        }
      }
    },
    homepage: {
      
    }
  }
});

const globalStyles = globalCss({
  '*': {
    margin: 0, 
    padding: 0,
    boxSizing: "border-box"
  },
  'body': {
    fontFamily: "'Nunito Sans', sans-serif",
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    fontSize: '1rem',
    lineHeight: 1.48,
    color: "rgb(95, 95, 95)"
  },
  "h1,h2,h3,h4,h5,h6": {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    color: "rgb(23, 23, 23)"
  },
  "a": {
    textDecoration: "none"
  },
  "h1": {
    fontSize: "2em",
    margin: "0 0 0.7em 0"
  },
  "h2": {
    fontSize: "1.5em",
    margin: "0 0 0.8em 0",
  },
  "h3": {
    fontSize: "1.17em",
    margin: "0 0 0.83em 0"
  }
});

const App = () => {
  globalStyles();
  return  (
    <AppContainer>
      {window.location.pathname !== '/' &&<Menu />}
      <Layout layout={window.location.pathname === '/' ? undefined : 'default'}>
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
