import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../Menu';
import * as json from '../portfolio.json';
import Button from '../Utils/Button';

class About extends Component {
  createList = list => {
    const translate = json.default;
    let html = '';
    translate.skills[list].map((item, idx) => {
      const lastItem = idx === translate.skills[list].length - 1 ? '' : ', ';
      html += `${item + lastItem}`;
    });

    return html;
  };

  render() {
    const translate = json.default;
    const category = Object.keys(translate.skills);
    const profileIcons = translate.footer.map(item => (
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
    ));

    return (
      <React.Fragment>
        <Helmet>
          <title>About | Yuki Cheung</title>
        </Helmet>
        <Menu />
        <section className="c-about u-section-padding u-section-margin">
          <div className="c-about-desc">
            <h1>{translate.headerButton}</h1>
            <p>{translate.aboutDesc}</p>
            <p>{translate.aboutDesc1}</p>

            <div className="c-about-profile">{profileIcons}</div>

            <div className="c-about-skills">
              <h2>Skills</h2>
              {category.map(item => {
                return (
                  <p key={item}>
                    <span className="c-about-skills__title">{item}</span>:{' '}
                    {this.createList(item)}
                  </p>
                );
              })}
            </div>

            <Button
              className="c-about-cta"
              target="/contact"
              value={translate.aboutButton}
            />
          </div>

          <div className="c-about-img fade-in">
            <img src="/assets/about_01_m.jpg" alt="" />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
