import React, { Component } from 'react';
import * as json from './portfolio.json';
import LazyLoad from 'react-lazyload';

class Logo extends Component {
  render() {
    const translate = json.default;
    return (
      <section className="c-logo">
        <div className="c-logo-container">
          {translate.brandList.map(item => (
            <LazyLoad height={96} key={item}>
              <img
                className="c-logo-item"
                src={`assets/${item}-logo.jpg`}
                alt={item}
              />
            </LazyLoad>
          ))}
        </div>
      </section>
    );
  }
}

export default Logo;
