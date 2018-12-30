import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Menu extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };
  render() {
    return (
      <nav
        className={
          this.props.location.pathname.indexOf('project') >= 0
            ? 'c-menu-wrapper no-banner'
            : 'c-menu-wrapper'
        }
      >
        <svg
          className="c-menu-icon"
          aria-labelledby="title"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <title>Yuki Cheung</title>
          <use href="assets/icon-sprite.svg#snowflake" />
        </svg>
        <ul className="c-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Menu);
