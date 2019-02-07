import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.closeBtn = React.createRef();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen) {
      this.closeBtn.current.focus();
    }
  }
  render() {
    return (
      <div
        className={
          this.props.isOpen ? 'u-image-overlay' : 'u-image-overlay hide'
        }
      >
        <button
          className="c-menu-btn c-menu-btn__open"
          onClick={() => this.props.openOverlay(null, false)}
          ref={this.closeBtn}
          aria-label="Click here to close overlay"
        >
          <div className="c-menu-btn--icon">
            <span className="c-menu__line1" />
            <span className="c-menu__line2" />
            <span className="c-menu__line3" />
          </div>
        </button>
        {this.props.children}
      </div>
    );
  }
}

Overlay.propTypes = {
  children: PropTypes.object,
  isOpen: PropTypes.bool,
  openOverlay: PropTypes.func,
};

export default Overlay;
