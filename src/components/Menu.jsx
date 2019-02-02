import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    let context = this,
      args = arguments;

    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth > 768,
      timer: 0,
      open: false,
    };
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  resize = () => {
    this.setState(prevState => {
      return {
        width: window.innerWidth > 768,
        open: window.innerWidth > 768 ? false : prevState.open,
      };
    });
  };

  componentDidMount() {
    window.addEventListener('resize', debounce(this.resize, 100));
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', debounce(this.resize, 100));
  // }

  render() {
    return (
      <nav
        className={
          this.props.location.pathname !== '/'
            ? 'c-menu-wrapper no-banner'
            : 'c-menu-wrapper'
        }
      >
        <div className="c-menu-logo">
          <svg
            className="c-menu-icon"
            aria-labelledby="title"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <title>Yuki Cheung</title>
            <use href="assets/icon-sprite.svg#snowflake1" />
          </svg>
        </div>

        {/* Menu button only shown in mobile */}
        <button
          className={this.state.width ? 'c-menu u-hide' : 'c-menu-mobile'}
          aria-expanded="false"
        >
          <div className="c-menu-mobile--icon">
            <span className="c-menu__line1" />
            <span className="c-menu__line2" />
            <span className="c-menu__line3" />
          </div>
        </button>

        {/* Menu contents hide in mobile */}
        <ul className={this.state.width ? 'c-menu' : 'c-menu u-hide'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/project/">Works</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Menu);
