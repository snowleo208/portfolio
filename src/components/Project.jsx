import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import * as json from './portfolio.json';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'all',
      list: json.default.projects,
    };
  }
  onChange = item => {
    const translate = json.default;
    let list = [];

    //filter items in current category
    if (item === 'all') {
      list = translate.projects;
    } else {
      list = translate.projects.filter(ele => ele.category === item);
    }

    this.setState({
      current: item,
      list,
    });
  };
  render() {
    // add this.state.current to CSSTransition key to make sure everytime will have transitions
    const itemList = this.state.list.map(item => (
      <CSSTransition
        key={item.urlKey + this.state.current}
        timeout={500}
        classNames="fade"
      >
        <div
          className="c-project-item"
          style={{
            backgroundImage: `url(assets/projects/${item.urlKey}.jpg)`,
          }}
        >
          <Link to={`./project/${item.urlKey}`}>
            <div className="c-project-item__overlay">
              <h2>{item.name}</h2>
              <p>{item.category}</p>
            </div>
          </Link>
        </div>
      </CSSTransition>
    ));

    return (
      <React.Fragment>
        <section className="c-project-title">
          <button
            className={
              this.state.current === 'all'
                ? 'c-project-btn active'
                : 'c-project-btn'
            }
            onClick={() => this.onChange('all')}
          >
            All
          </button>
          <button
            className={
              this.state.current === 'commercial'
                ? 'c-project-btn active'
                : 'c-project-btn'
            }
            onClick={() => this.onChange('commercial')}
          >
            Commercial
          </button>
          <button
            className={
              this.state.current === 'side project'
                ? 'c-project-btn active'
                : 'c-project-btn'
            }
            onClick={() => this.onChange('side project')}
          >
            Side projects
          </button>
        </section>
        <TransitionGroup className="c-project">{itemList}</TransitionGroup>
      </React.Fragment>
    );
  }
}

export default Project;
