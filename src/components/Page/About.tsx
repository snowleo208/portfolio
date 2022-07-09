import React from 'react';
import { Helmet } from 'react-helmet';
import translate from '../portfolio';
import Menu from '../Menu';
import { AboutGrid, AboutImage, ImageWrapper, Text, Skill } from './About.styles';
import { Link } from '../Utils/Header/Header.styles';
import image from '../../assets/about_01_m.jpg';

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
      <Menu />
      <AboutGrid>
            <div>
              <h1>{translate.headerButton}</h1>
              <Text>{translate.aboutDesc}</Text>
              <Text>{translate.aboutDesc1}</Text>
  
              {/* <div className="c-about-profile">{profileIcons}</div> */}
  
              <div>
                <h2>Skills</h2>
                {category.map(item => {
                  return (
                    <Text key={item}>
                      <Skill>{item}</Skill>:{' '}
                      {createList(item as keyof typeof translate.skills)}
                    </Text>
                  );
                })}
              </div>
  
              <Link
                href="/contact"
              >{translate.aboutButton}
              </Link>
            </div>
  
          <ImageWrapper>
            <AboutImage src={image} alt="" />
            </ImageWrapper>
          </AboutGrid>
    </>
  );
}

export default About;
