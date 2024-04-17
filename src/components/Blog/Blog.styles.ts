import { styled } from '@stitches/react';

export const BlogGrid = styled('div', {
    display: "flex",
    backgroundColor: "#f6f6f6",
    padding: "4em 1em",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
});

export const BlogHeader = styled('h2', {
    textAlign: "center",
    margin: "0 0 1em"
});


export const BlogPost = styled('div', {
    display: "grid",
    rowGap: "1.5rem",
    "@media only screen and (min-width : 992px)": {
        gridTemplateColumns: "repeat(3, 18.75rem)",
        columnGap: "1.5rem",
    }
});

export const PostComponent = styled('div', {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    transitionProperty: 'box-shadow',
    transitionDuration: '150ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    color: 'rgb(95, 95, 95)',
    '&:hover': {
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    },
    '&:visited': {
        color: 'rgb(95, 95, 95)',
    }
});

export const PostTitleWrapper = styled('div', {
    padding: "1rem"
});

export const PostTitle = styled('h3', {
    display: "block",
    margin: "0 0 0.5em 0",
    transition: "ease 400ms",
    fontSize: "1.05em",
    textDecoration: "none",
    "@media only screen and (min-width : 992px)": {
        fontSize: "1.17em",
    }
});

export const PostImage = styled('img', {
    display: "block",
    width: "100%",
    transition: "ease 400ms",
    aspectRatio: '16 / 9'
});

export const PostDate = styled('p', {
    textTransform: "uppercase",
    fontSize: "0.7rem",
    fontWeight: "bold"
});

