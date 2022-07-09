import { styled } from '@stitches/react';

export const TitleGrid = styled('div', {
    padding: "2rem 0"
});

export const Title = styled('p', {
    fontSize: "0.9rem",
    textAlign: "center"
});

export const ProjectGrid = styled('div', {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)"
});

export const ProjectOverlay = styled('div', {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "2rem",
    backgroundColor: "rgba(23, 23, 23, 0.9)",
    opacity: 0,
    transition: "opacity ease 400ms",
    "h2": {
        color: "white",
        fontSize: "1.25rem",
        textAlign: "center"
    },
    "p": {
        fontSize: "0.7rem",
        color: "white",
        textTransform: 'uppercase',
        fontWeight: 600
    }
});

export const ProjectItem = styled('div', {
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vw",
    "@media only screen and (min-width : 768px)": {
        minHeight: "calc(100vw / 3)"
    },
    "&:hover": {
        "div": {
            opacity: 1
        }
    }
});