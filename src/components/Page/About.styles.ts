import { styled } from '@stitches/react';

export const AboutGrid = styled('div', {
    display: "grid",
    padding: "0 1rem",
    paddingBottom: "1rem",
    "@media only screen and (min-width : 992px)": {
        gridTemplateColumns: "60% 1fr",
        columnGap: "1.5rem",
        padding: "1rem 4rem",
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