import React from 'react';
import { StyledFooter, StyledFooterWrapper, Text, Link, Icon, TextLink } from './Footer.styles';
import translate from '../../portfolio';
import Sprite from '../../../assets/icon-sprite.svg';

export const Footer = () => (
  <StyledFooter>
        <StyledFooterWrapper>
          {translate.footer.map(item => (
            <Link
              href={item.url}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="c-footer-icon"
                aria-labelledby="title"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <title>{item.id}</title>
                <use href={`${Sprite}#${item.id}`} />
              </Icon>
            </Link>
          ))}
        </StyledFooterWrapper>
        <Text>
          {new Date().getFullYear()} © Code by Yuki Cheung. Design by{' '}
          <TextLink
            href="https://dribbble.com/shots/3782221-Free-PSD-Portfolio-Template"
            target="_blank"
            rel="noreferrer noopener"
          >
            Svetlana
          </TextLink>
        </Text>
      </StyledFooter>
)
