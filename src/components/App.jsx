import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../css/main.sass';

import Home from './Page/Home';
import About from './Page/About';
import ProjectPage from './Page/ProjectPage';
import ContactPage from './Page/ContactPage';
import ProjectDetails from './ProjectDetails';
import Footer from './Utils/Footer';
import ScrollToTop from './Utils/ScrollToTop';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route
            render={({ location }) => (
              <div className="app-container">
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/project" exact component={ProjectPage} />
                  <Route path="/contact" exact component={ContactPage} />
                  <Route path="/project/:url" component={ProjectDetails} />
                  <Route render={() => <h1>404 Not Found</h1>} />
                </Switch>
                <Footer />
              </div>
            )}
          />
        </ScrollToTop>
      </Router>
    );
  }
}

export default hot(module)(App);
