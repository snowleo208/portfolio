import React, { Component } from 'react';
import * as json from './portfolio.json';
import PropTypes from 'prop-types';
import Menu from './Menu';
import { withRouter } from 'react-router';

class ProjectDetails extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };
  render() {
    const { match } = this.props;
    const translate = json.default;
    const project = translate.projects.filter(
      item => item.urlKey === match.params.url
    );
    return (
      <React.Fragment>
        <Menu />
        <section className="c-details">
          {project && project.length === 1
            ? project.map(ele => (
                <section className="c-details-item" key={ele.urlKey}>
                  <div className="c-details-intro">
                    <h1>{ele.name}</h1>
                    <p className="c-details-desc">{ele.desc}</p>
                    <p className="c-details-desc">{ele.techDesc}</p>
                  </div>

                  <table className="c-details-spec">
                    <tbody>
                      <tr>
                        <td>Client: </td>
                        <td>{ele.client}</td>
                      </tr>
                      <tr>
                        <td>Live Site: </td>
                        <td>
                          <a
                            href={ele.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View here
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Date: </td>
                        <td>{ele.date}</td>
                      </tr>
                      <tr>
                        <td>Category: </td>
                        <td className="c-details-category">{ele.category}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              ))
            : 'No project'}
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(ProjectDetails);
