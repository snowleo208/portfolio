import React from 'react';
import translate from '../portfolio';
import { LogoGrid, LogoContainer, StyledLogo } from './Logo.styles';
import * as EFLogo from '../../assets/ef-logo.jpg';
import * as ZooplaLogo from '../../assets/zoopla-logo.jpg';
import * as DBSLogo from '../../assets/dbs-logo.jpg';

const imageList: Record<string, any> = {
  zoopla: ZooplaLogo,
  ef: EFLogo,
  dbs: DBSLogo,
};

export function Logo() {
  return (
    <LogoGrid>
      <LogoContainer>
        {translate.brandList.map((item) => (
          <StyledLogo src={imageList[item]} key={`${item}-logo`} />
        ))}
      </LogoContainer>
    </LogoGrid>
  );
}
