import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../css/main.sass';

import Home from './Home';
import About from './About';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default hot(module)(App);
