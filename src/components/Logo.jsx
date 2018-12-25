import React, { Component } from 'react';
import * as json from './portfolio.json';

class Logo extends Component {
  render() {
    const translate = json.default;
    return (
      <section className="c-logo">
        {translate.brandList.map(item => (
          <img
            className="c-logo-item"
            key={item}
            src={`assets/${item}-logo.jpg`}
            alt={item}
          />
        ))}
      </section>
    );
  }
}

export default Logo;
