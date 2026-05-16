import React from 'react';
import {
  StyledHeader, HeaderWrapper, Banner, HeaderText, ButtonLink,
} from './Header.styles';
import { Menu } from '../../Menu/Menu';
import translate from '../../portfolio';

const bgImage = new URL('../../../assets/top.jpg', import.meta.url).toString();

export function Header() {
  return (
    <header>
      <StyledHeader style={{
          backgroundImage: `url(${bgImage})`,
        }}>
        <Menu />
        <Banner>
          <HeaderWrapper>
            <h1>{translate.header}</h1>
            <HeaderText>{translate.headerText}</HeaderText>
            <ButtonLink to="/about">{translate.headerButton}</ButtonLink>
          </HeaderWrapper>
        </Banner>
      </StyledHeader>
    </header>
  );
}
