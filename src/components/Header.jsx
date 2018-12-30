import React, { Component } from 'react';
import Menu from './Menu';
import Button from './Utils/Button';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import * as json from './portfolio.json';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    const { location } = this.props;
    const translate = json.default;
    return (
      <section
        className={
          location.pathname !== '/about/'
            ? 'c-header'
            : 'c-header c-header__about'
        }
      >
        <Menu />

        <div className="c-header-banner">
          <div className="c-header-banner__grid">
            {location.pathname !== '/about/' ? (
              <React.Fragment>
                <h1>{translate.header}</h1>
                <p className="c-header-text">{translate.headerText}</p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1>{translate.aboutHeader}</h1>
                <p className="c-header-text">{translate.aboutText}</p>
              </React.Fragment>
            )}

            {location.pathname !== '/about/' ? (
              <Button
                className="c-header-cta"
                target="/about/"
                value={translate.headerButton}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Header);
