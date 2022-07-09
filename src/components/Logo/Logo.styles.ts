import { styled } from '@stitches/react';

export const LogoGrid = styled('section', {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "2rem 1rem"
});

export const LogoContainer = styled('div', {
    display: "flex",
    alignItems: "center",
    textAlign: "center"
});

export const StyledLogo = styled('img', {
    display: "inline-block",
    width: "100%",
    maxWidth: "6em",
    filter: "grayscale(100%)",
    marginRight: "1em",
    height: "auto",
    "@media only screen and (min-width : 992px)": {
        width: "9em",
        height: "auto",
    }
});
  