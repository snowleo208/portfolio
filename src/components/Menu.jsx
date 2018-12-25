import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <nav className="c-menu-wrapper">
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

export default Menu;
