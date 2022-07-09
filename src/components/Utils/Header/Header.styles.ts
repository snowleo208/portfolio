import { styled } from '@stitches/react';
import bgImage from '../../../assets/WPIMGL2752_TP_V.jpg';

export const StyledHeader = styled('section', {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    height: "100vh",
    maxHeight: "50rem",
    transition: "ease 400ms",
    backgrounPosition: "30% 0%",
    "@media only screen and (min-width : 768px)": {
        backgroundPosition: "10% 30%",
        height: "50vh",
        minHeight: "28em"
    },
    "@media only screen and (min-width : 992px)": {
        height: "70vh",
        backgroundPosition:  "10% 60%",
        minHeight: "35rem"
    }
});

export const Banner = styled('div', {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto 0 auto auto",
    padding: "1rem 1rem",
    "@media only screen and (min-width : 768px)": {
        padding: "1rem 4rem"
    }
});

export const Link = styled('a', {
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

export const HeaderWrapper = styled('div', {
    "@media only screen and (min-width : 768px)": {
            width: "100%",
            maxWidth: "65vw",
            minWidth: 500
       },
       "only screen and (min-width : 992px)": {
            width: "100%",
            maxWidth: 600,
            minWidth: 600,
      },
        "@media only screen and (min-width : 1680px)": {
            width: "100%",
            maxWidth: "44vw",
            minWidth: "40%",
            padding: "2em",
        }
});

export const HeaderText = styled('p', {
    textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
    paddingBottom: "1rem"
});

