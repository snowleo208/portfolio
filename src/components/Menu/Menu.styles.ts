import { styled } from '@stitches/react';

export const MenuWrapper = styled('div', {
    padding: "1rem",
    "@media only screen and (min-width : 992px)": {
        padding: "1rem 4rem",
    }
});

export const Icon = styled('svg', {
    width: "2.2rem",
    height: "2.2rem",
    fill: "rgb(95, 95, 95)",
    transition: "ease 400ms",
    "&:hover": {
        fill: "rgb(23, 23, 23)"
    }
});