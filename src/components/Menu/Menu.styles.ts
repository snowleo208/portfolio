import { styled } from '@stitches/react';

export const MenuWrapper = styled('div', {
    padding: "1rem",
    "@media only screen and (min-width : 992px)": {
        width: '100%',
        maxWidth: 1140,
        margin: '0 auto',
        padding: "1rem 1rem",
    }
});

export const IconWrapper = styled('span', {
    color: "rgb(95, 95, 95)",
    display: "inline-flex",
    transition: "ease 400ms",
    "&:hover": {
        color: "rgb(23, 23, 23)"
    },
    svg: {
        width: "2.2rem",
        height: "2.2rem",
    }
});
