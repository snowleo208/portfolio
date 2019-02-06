import React, { Component } from 'react';
import * as json from './portfolio.json';

class Logo extends Component {
  render() {
    const translate = json.default;
    return (
      <section className="c-logo">
        <div className="c-logo-container">
          {translate.brandList.map(item => (
            <img
              className="c-logo-item"
              key={item}
              src={`assets/${item}-logo.jpg`}
              alt={item}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Logo;
