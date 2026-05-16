import React from 'react';
import translate from '../portfolio';
import { LogoGrid, LogoContainer, StyledLogo } from './Logo.styles';

const EFLogo = new URL('../../assets/ef-logo.jpg', import.meta.url).toString();
const ZooplaLogo = new URL('../../assets/zoopla-logo.jpg', import.meta.url).toString();
const DBSLogo = new URL('../../assets/dbs-logo.jpg', import.meta.url).toString();

const imageList: Record<string, string> = {
  zoopla: ZooplaLogo,
  ef: EFLogo,
  dbs: DBSLogo,
};

export function Logo() {
  return (
    <LogoGrid>
      <LogoContainer>
        {translate.brandList.map((item) => (
          <StyledLogo
            alt={`${item} logo`}
            loading="lazy"
            src={imageList[item]}
            key={`${item}-logo`}
          />
        ))}
      </LogoContainer>
    </LogoGrid>
  );
}
