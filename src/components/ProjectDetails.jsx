import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as json from './portfolio.json';
import Menu from './Menu';
import Button from './Utils/Button';
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
        <section
          className="c-details-bg"
          style={{
            backgroundImage: `url(/assets/projects/bg/${
              project[0].urlKey
            }.jpg)`,
          }}
        />
        <section className="c-details">
          {project && project.length === 1
            ? project.map(ele => (
                <section
                  className="c-details-item u-section-padding"
                  key={ele.urlKey}
                >
                  <Helmet>
                    <title>{ele.name} - Projects | Yuki Cheung</title>
                  </Helmet>
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
                        <td>Date: </td>
                        <td>{ele.date}</td>
                      </tr>
                      <tr>
                        <td>Category: </td>
                        <td className="c-details-category">{ele.category}</td>
                      </tr>
                    </tbody>
                  </table>

                  <Button
                    className="u-btn project-btn u-section-margin"
                    target={ele.link}
                    value="Live Site"
                  />

                  <section className="c-details-gallery">
                    {ele.gallery
                      ? ele.gallery.map(item => (
                          <div className="c-details-gallery__item" key={item}>
                            <img
                              src={`/assets/projects/gallery/${item}`}
                              alt=""
                            />
                          </div>
                        ))
                      : ''}
                  </section>
                </section>
              ))
            : 'No project'}
        </section>
        <section className="c-details-menu">
          <Link to="/">
            <p>Back to Top</p>
          </Link>
        </section>
      </React.Fragment>
    );
  }
}

export default withRouter(ProjectDetails);
