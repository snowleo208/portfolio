import React from 'react';
import { Link } from 'react-router';
import { IconWrapper, MenuWrapper } from './Menu.styles';
import { SnowflakeIcon } from '../Utils/icons';

export function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <IconWrapper>
          <SnowflakeIcon title="Yuki Cheung's Portfolio" />
        </IconWrapper>
      </Link>
    </MenuWrapper>
  );
}
