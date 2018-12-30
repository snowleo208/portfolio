import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import '../../css/main.sass';

import Home from './Home';
import About from './About';
import ProjectDetails from './ProjectDetails';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/project/:url" component={ProjectDetails} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);
