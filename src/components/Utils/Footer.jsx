import React, { Component } from 'react';
import * as json from '../portfolio.json';

class Footer extends Component {
  render() {
    const translate = json.default;
    return (
      <footer className="c-footer">
        <div className="c-footer-list">
          {translate.footer.map(item => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="c-footer-icon"
                aria-labelledby="title"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <title>{item.id}</title>
                <use href={`/assets/icon-sprite.svg#${item.id}`} />
              </svg>
            </a>
          ))}
        </div>
        <p>
          {new Date().getFullYear()} © Code by Yuki Cheung. Design by{' '}
          <a
            href="https://dribbble.com/shots/3782221-Free-PSD-Portfolio-Template"
            target="_blank"
            rel="noreferrer noopener"
          >
            Svetlana
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
