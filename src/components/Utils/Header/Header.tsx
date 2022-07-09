import React from 'react';
import { StyledHeader, HeaderWrapper, Banner, HeaderText, Link } from './Header.styles'
import Menu from '../../Menu';
import translate from '../../portfolio';

export const Header = () => (
  <header>
        <StyledHeader>
          <Menu />
          <Banner>
            <HeaderWrapper>
                <h1>{translate.header}</h1>
                <HeaderText>{translate.headerText}</HeaderText>
              <Link href="/about">{translate.headerButton}</Link>
            </HeaderWrapper>
          </Banner>
        </StyledHeader>
      </header>
)
