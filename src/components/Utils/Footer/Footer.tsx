import React from 'react';
import {
  StyledFooter, StyledFooterWrapper, Text, Link, Icon, TextLink,
} from './Footer.styles';
import translate from '../../portfolio';
import { CodepenIcon, DevToIcon, GithubIcon } from '../icons';

const iconComponents = {
  codepen: CodepenIcon,
  'dev-dot-to': DevToIcon,
  github: GithubIcon,
};

export function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        {translate.footer.map((item) => {
          const SocialIcon = iconComponents[item.id as keyof typeof iconComponents];

          return (
            <Link
              aria-label={item.id}
              href={item.url}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <SocialIcon title={item.id} />
              </Icon>
            </Link>
          );
        })}
      </StyledFooterWrapper>
      <Text>
        2018 - {new Date().getFullYear()}
        {' '}
        © All contents owned by Yuki Cheung. Design by
        {' '}
        <TextLink
          href="https://dribbble.com/shots/3782221-Free-PSD-Portfolio-Template"
          target="_blank"
          rel="noreferrer noopener"
        >
          Svetlana
        </TextLink>
      </Text>
    </StyledFooter>
  );
}
