import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as json from './portfolio.json';

class Project extends Component {
  render() {
    const translate = json.default;
    return (
      <React.Fragment>
        <section className="c-project-title">
          <p>All Projects</p>
        </section>
        <section className="c-project">
          {translate.projects.map(item => (
            <div
              className="c-project-item"
              key={item.urlKey}
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
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default Project;
