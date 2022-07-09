import React from 'react';
import { Helmet } from 'react-helmet';
import translate from '../portfolio';
import image from '../../assets/about_01_m.jpg';

// import Menu from '../Menu';

const About = () => {
  const category = Object.keys(translate.skills);
  const createList = (list: keyof typeof translate.skills) => {
    let html = '';
    translate.skills[list].map((item, idx) => {
      const lastItem = idx === translate.skills[list].length - 1 ? '' : ', ';
      html += `${item + lastItem}`;
    });

    return html;
  };
  return (
    <>
    <Helmet>
            <title>About | Yuki Cheung</title>
      </Helmet>
      <section className="c-about u-section-padding u-section-margin">
            <div className="c-about-desc">
              <h1>{translate.headerButton}</h1>
              <p>{translate.aboutDesc}</p>
              <p>{translate.aboutDesc1}</p>
  
              {/* <div className="c-about-profile">{profileIcons}</div> */}
  
              <div className="c-about-skills">
                <h2>Skills</h2>
                {category.map(item => {
                  return (
                    <p key={item}>
                      <span className="c-about-skills__title">{item}</span>:{' '}
                      {createList(item as keyof typeof translate.skills)}
                    </p>
                  );
                })}
              </div>
  
              <a
                className="c-about-cta"
                href="/contact"
              />
            </div>
  
            <div className="c-about-img fade-in">
              <img src={image} alt="" />
            </div>
          </section>
    </>
  );
}

export default About;
