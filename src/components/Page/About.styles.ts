import { styled } from '@stitches/react';

export const AboutGrid = styled('div', {
    display: "grid",
    paddingBottom: "1rem",
    "@media only screen and (min-width : 992px)": {
        gridTemplateColumns: "60% 1fr",
        columnGap: "1.5rem",
    }
});

export const IconContainer = styled('div', {
    paddingBottom: "1.2rem",
});

export const Icon = styled('svg', {
    width: "1.2rem",
    height: "1.2rem",
    fill: "rgb(95, 95, 95)",
    transition: "ease 400ms",
    marginRight: '0.8rem',
    "&:hover": {
        fill: "rgb(23, 23, 23)"
    }
});

export const ImageWrapper = styled('div', {
    display: 'inline-block',
});

export const AboutImage = styled('img', {
    display: 'inline-block',
    width: '100%'
});

export const Text = styled('p', {
    paddingBottom: '1rem'
});

export const Skill = styled('span', {
    textTransform: 'capitalize',
    fontWeight: 'bold'
});