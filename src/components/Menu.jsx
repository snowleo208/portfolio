import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import debounce from './Utils/debounce';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (window.innerWidth <= 768) {
      this.setState({
        open: false,
      });
    } else if (this.menu.current) {
      this.menu.current.className = 'c-menu';

      //disable scroll for body
      this.setScroll(false);
    }
  };

  menuItemOnClick = () => {
    if (window.innerWidth <= 768) {
      this.setState(prevState => {
        return {
          open: !prevState.open,
        };
      });
      this.menuBtn.current.focus();

      //disable scroll for body
      this.setScroll(false);
    }
  };

  onClick = () => {
    const menu = this.menu.current;
    if (window.innerWidth <= 768) {
      menu.classList.remove('hide');
      this.setState(prevState => {
        //disable scroll for body
        this.setScroll(!prevState.open);

        return {
          open: !prevState.open,
        };
      });

      //set focus to menu button if menu closes, to menu link if it opens
      this.state.open
        ? this.menu.current.focus()
        : this.menuBtn.current.focus();
    } else {
      this.setScroll(false);
      return false;
    }
  };

  setScroll = bool => {
    if (bool) {
      document.body.classList.add('u-no-scroll');
    } else if (!bool || document.body.classList.contains('u-no-scroll')) {
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
    window.addEventListener('resize', debounce(this.resize, 300));
    window.addEventListener('scroll', debounce(this.fixedMenu, 200));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.resize, 300));
    window.removeEventListener('scroll', debounce(this.fixedMenu, 200));
  }

  render() {
    return (
      <nav
        className={
          this.props.location.pathname !== '/'
            ? 'c-menu-wrapper no-banner'
            : this.state.isFixed
            ? 'c-menu-wrapper u-fixed'
            : 'c-menu-wrapper'
        }
      >
        <Link to="/">
          <div className="c-menu-logo">
            <svg
              className="c-menu-icon"
              aria-labelledby="title"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Yuki Cheung</title>
              <use href="/assets/icon-sprite.svg#snowflake1" />
            </svg>
          </div>
        </Link>

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
          ref={this.menu}
          className={this.state.open ? 'c-menu c-menu-overlay' : 'c-menu'}
          onTransitionEnd={() =>
            !this.state.open && window.innerWidth <= 768
              ? this.menu.current.classList.add('hide')
              : ''
          }
        >
          <ul className="c-menu-list">
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
