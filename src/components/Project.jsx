import React, { Component } from 'react';
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
              <div className="c-project-item__overlay">
                <h2>{item.name}</h2>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default Project;
