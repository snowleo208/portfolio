import React from 'react';
import { Helmet } from 'react-helmet';
import translate from '../portfolio';
import {
  AboutGrid, AboutImage, ImageWrapper, Text, Skill,
} from './About.styles';
import { ButtonLink } from '../Utils/Header/Header.styles';
import { ProfileIcons } from './ProfileIcons';

const image = new URL('../../assets/about_01_m.jpg', import.meta.url).toString();

function About() {
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
      <AboutGrid>
        <div>
          <h1>{translate.headerButton}</h1>
          <Text>{translate.aboutDesc}</Text>
          <Text>{translate.aboutDesc1}</Text>

          <ProfileIcons links={translate.footer} />

          <div>
            <h2>Skills</h2>
            {category.map((item) => (
              <Text key={item}>
                <Skill>{item}</Skill>
                :
                {' '}
                {createList(item as keyof typeof translate.skills)}
              </Text>
            ))}
          </div>

          <ButtonLink
            to="/contact"
          >
            {translate.aboutButton}
          </ButtonLink>
        </div>

        <ImageWrapper>
          <AboutImage loading="lazy" src={image} alt="" />
        </ImageWrapper>
      </AboutGrid>
    </>
  );
}

export default About;
