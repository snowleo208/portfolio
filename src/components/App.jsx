import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../css/main.sass';

import Home from './Home';
import About from './About';
import ProjectDetails from './ProjectDetails';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <div>
                <TransitionGroup>
                  {/* <CSSTransition
                    key={location.key}
                    classNames="transit"
                    timeout={300}
                  > */}
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/project/:url" component={ProjectDetails} />
                    <Route render={() => <h1>404 Not Found</h1>} />
                  </Switch>
                  {/* </CSSTransition> */}
                </TransitionGroup>
                <Footer />
              </div>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default hot(module)(App);
