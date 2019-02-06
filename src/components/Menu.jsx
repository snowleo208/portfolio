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
      isLaptop: window.innerWidth > 768,
      timer: 0,
      open: false,
      isFixed: false,
    };
    this.menu = React.createRef();
    this.menuBtn = React.createRef();
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  resize = () => {
    this.setState(prevState => {
      return {
        isLaptop: window.innerWidth > 768,
        open: window.innerWidth > 768 ? false : prevState.open,
      };
    });
  };

  menuItemOnClick = () => {
    if (window.innerWidth <= 768) {
      this.setState(prevState => {
        return {
          open: !prevState.open,
        };
      });
      this.menuBtn.focus();
    }
  };

  onClick = () => {
    if (window.innerWidth <= 768) {
      this.setState(prevState => {
        return {
          open: !prevState.open,
        };
      });
      this.setNoScroll(true);
      this.menu.focus();
    } else {
      this.setNoScroll(false);
      this.menuBtn.focus();
      return false;
    }
  };

  setNoScroll = bool => {
    if (bool) {
      document.body.classList.add('u-no-scroll');
    } else {
      document.body.classList.remove('u-no-scroll');
    }
  };

  fixedMenu = () => {
    if (
      window.scrollY > 100 ||
      window.pageYOffset > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      this.setState({
        isFixed: true,
      });
    } else {
      this.setState({
        isFixed: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', debounce(this.resize, 100));
    window.addEventListener('scroll', debounce(this.fixedMenu, 200));
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
          className={
            this.state.open ? 'c-menu-btn c-menu-btn__open' : 'c-menu-btn'
          }
          aria-expanded={this.state.open ? 'true' : 'false'}
          onClick={this.onClick}
          ref={this.menuBtn}
        >
          <div className="c-menu-btn--icon">
            <span className="c-menu__line1" />
            <span className="c-menu__line2" />
            <span className="c-menu__line3" />
          </div>
        </button>

        {/* Menu contents hide in mobile */}
        <div
          className={
            this.state.open
              ? 'c-menu-overlay'
              : this.state.isLaptop
              ? 'c-menu'
              : 'u-hide'
          }
        >
          <ul className="c-menu" ref={this.menu}>
            <li>
              <Link onClick={this.menuItemOnClick} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={this.menuItemOnClick} to="/about/">
                About
              </Link>
            </li>
            <li>
              <Link onClick={this.menuItemOnClick} to="/project/">
                Works
              </Link>
            </li>
            <li>
              <Link onClick={this.menuItemOnClick} to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Menu);
