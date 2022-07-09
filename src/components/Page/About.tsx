import React from 'react';
import { Helmet } from 'react-helmet';
import translate from '../portfolio';
import {
  AboutGrid, AboutImage, ImageWrapper, Text, Skill, IconContainer, Icon,
} from './About.styles';
import { Link } from '../Utils/Header/Header.styles';
import image from '../../assets/about_01_m.jpg';
import Sprite from '../../assets/icon-sprite.svg';

function About() {
  const category = Object.keys(translate.skills);
  const profileIcons = translate.footer.map((item) => (
    <a
      href={item.url}
      key={item.id}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        aria-labelledby="title"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <title>{item.id}</title>
        <use href={`${Sprite}#${item.id}`} />
      </Icon>
    </a>
  ));
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

          <IconContainer>{profileIcons}</IconContainer>

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

          <Link
            href="/contact"
          >
            {translate.aboutButton}
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
