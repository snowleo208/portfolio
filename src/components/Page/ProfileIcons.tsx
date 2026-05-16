import React from 'react';
import { IconContainer, IconWrapper } from './About.styles';
import { CodepenIcon, DevToIcon, GithubIcon } from '../Utils/icons';

const iconComponents = {
  codepen: CodepenIcon,
  'dev-dot-to': DevToIcon,
  github: GithubIcon,
};

export type ProfileIconId = keyof typeof iconComponents;

export type ProfileIconLink = {
  id: string;
  url: string;
};

type ProfileIconsProps = {
  links: ProfileIconLink[];
};

const isProfileIconId = (id: string): id is ProfileIconId => id in iconComponents;

export const ProfileIcons = ({ links }: ProfileIconsProps) => (
  <IconContainer>
    {links.map((item) => {
      if (!isProfileIconId(item.id)) {
        return null;
      }

      const SocialIcon = iconComponents[item.id];

      return (
        <a
          href={item.url}
          key={item.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper>
            <SocialIcon title={item.id} />
          </IconWrapper>
        </a>
      );
    })}
  </IconContainer>
);
