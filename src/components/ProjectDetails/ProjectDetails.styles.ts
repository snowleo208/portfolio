import { styled } from '@stitches/react';

export const HeroImage = styled('div', {
    height: 500,
    backgroundPosition: "60%",
    backgroundSize: "cover",
    "@media only screen and (min-width : 992px)": {
        height: 600
    }
});

export const ProjectContainer = styled('div', {
    padding: "1rem",
    backgroundColor: "#f6f6f6",
    "@media only screen and (min-width : 992px)": {
        padding: "2.5rem 4rem",
    }
});

export const ImageGallery = styled('div', {
    display: "grid",
    rowGap: "1rem",
    "@media only screen and (min-width : 992px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
        columnGap: "1rem"
    }
});

export const Box = styled('div', {
    paddingBottom: "1rem"
});

export const ButtonLink = styled('a', {
    display: "inline-block",
    width: "auto",
    fontFamily: "'Montserrat',Helvetica,Arial,sans-serif",
    fontWeight: 500,
    backgroundColor: "rgb(16, 201, 195)",
    padding: "0.8em 1.6em",
    color: "white",
    border: 0,
    cursor: "pointer",
    margin: "0.5em 0",
    transition: "ease 400ms",
    textDecoration: "none",
    "&:hover": {
        backgroundColor: "rgb(37, 37, 37)",
        color: "white",
    }
});

export const TextLinkWrapper = styled('section', {
    padding: "1rem"
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

export const LinkWrapper = styled('div', {
    paddingBottom: "4rem"
});

export const Text = styled('p', {
    paddingBottom: "1rem"
});

export const ThumbnailImage = styled('img', {
    display: 'inline-block',
    width: '100%'
});