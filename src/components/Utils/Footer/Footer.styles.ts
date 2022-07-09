import { styled } from '@stitches/react';

export const StyledFooter = styled('footer', {
    background: "#f6f6f6",
    padding: "3rem 1rem",
    marginTop: "auto"
});

export const StyledFooterWrapper = styled('div', {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.5rem"
});

export const Text = styled('p', {
    display: "block",
    textAlign: "center",
    fontSize: "0.9rem",
    margin: 0
});

export const Link = styled('a', {
    marginRight: "1rem"
});

export const Icon = styled('svg', {
    width: "1.2em",
    height: "1.2em",
    fill: "rgb(95, 95, 95)",
    transition: "ease 400ms",
    "&:hover": {
        fill: "rgb(23, 23, 23)"
    }
});


export const TextLink = styled('a', {
    textDecoration: "none",
    display: "inline",
    color: "rgb(95, 95, 95)",
    transition: "ease 400ms",
    "&:hover, &:focus": {
      color: "rgb(23, 23, 23)"
    }
});
