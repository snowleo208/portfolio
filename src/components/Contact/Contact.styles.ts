import { styled } from '@stitches/react';

export const Container = styled('div', {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
});

export const ContactGrid = styled('section', {
    display: "grid",
    rowGap: "1.5rem",
    "@media only screen and (min-width : 992px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
        columnGap: "1.5rem",
    }
});

export const StyledForm = styled('form', {
    display: 'flex',
    flexDirection: "column"
});

export const Label = styled('p', {
    margin: "1em 0 0.2em 0",
    fontSize: "0.8em",
    color: "rgba(25,25,25,0.8)",
});

export const TextInput = styled('input', {
    display: "block",
    padding: "0.2em 2em 0.2em 0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    backgroundPosition: "99% 50%",
    border: "solid 1px rgba(25,25,25,0.5)",
    transition: "border-color ease 300ms",
    width: "100%",
    "&:focus": {
        border: "solid 1px $theme"
    }
});

export const TextArea = styled('textarea', {
    display: "block",
    padding: "0.2em 2em 0.2em 0",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px 20px",
    backgroundPosition: "99% 50%",
    border: "solid 1px rgba(25,25,25,0.5)",
    transition: "border-color ease 300ms",
    width: "100%",
    "&:focus": {
        border: "solid 1px $theme"
    }
});

export const Button = styled('input', {
    display: "inline-block",
    width: "auto",
    fontFamily: "'Montserrat',Helvetica,Arial,sans-serif",
    fontWeight: 500,
    backgroundColor: "rgb(16, 201, 195)",
    padding: "0.8rem 1.6rem",
    marginTop: '1rem',
    color: "white",
    border: 0,
    cursor: "pointer",
    transition: "ease 400ms",
    textDecoration: "none",
    "&:hover": {
        backgroundColor: "rgb(37, 37, 37)",
    }
});

export const Error = styled('span', {
    fontSize: '0.8rem',
    color: "#EF5350",
    paddingTop: "0.3rem"
});