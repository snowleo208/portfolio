import React, { Component } from 'react';
import Menu from '../Menu';
import Button from './Button';
import * as json from '../portfolio.json';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const translate = json.default;
    return (
      <header>
        <section className="c-header">
          <Menu />

          <div className="c-header-banner fade-in">
            <div className="c-header-banner__grid">
              <React.Fragment>
                <h1>{translate.header}</h1>
                <p className="c-header-text">{translate.headerText}</p>
              </React.Fragment>
              <Button
                className="c-header-cta"
                target="/about/"
                value={translate.headerButton}
              />
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
