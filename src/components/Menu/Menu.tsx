import React from 'react';
import { Link } from 'react-router-dom';
import Sprite from '../../assets/icon-sprite.svg';
import { Icon, MenuWrapper } from './Menu.styles';

export const Menu = () => {
  return (
    <MenuWrapper>
      <Link to="/">
            <Icon
              aria-labelledby="title"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Yuki Cheung's Portfolio</title>
              <use href={`${Sprite}#snowflake1`} />
            </Icon>
        </Link>
    </MenuWrapper>
  );
}