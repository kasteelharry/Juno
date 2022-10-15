import { createTheme } from '@mui/material/styles';

const font = 'Montserrat';

export const PersonalTheme = createTheme({
    palette: {
        primary: {
            light: "#A6E1FA",
            main: "#0E77B2",
            dark: "#0A2472",
            contrastText: "#fff"
        },
        secondary: {
            main: '#2bb2e3',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: font,
            }
          }
    },
    typography: {
        fontFamily: font,
        h3: {
            '@media (min-width:0px)': {
                fontFamily: font,
                fontSize: '1.8rem',
            },
            '@media (min-width:600px)': {
                fontFamily: font,
                fontSize: '2.25rem',
            },
            '@media (min-width:900px)': {
                fontFamily: font,
                fontSize: '2.8rem',
            },
            '@media (min-width:1000px)': {
                fontFamily: font,
                fontSize: '3.5rem',
            },
            '@media (min-width:2000px)': {
                fontFamily: font,
                fontSize: '4.5rem',
            },
        },
        h4: {
            fontFamily: font,
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontFamily: font,
                fontSize: '1.5rem',
            },
            '@media (min-width:900px)': {
                fontFamily: font,
                fontSize: '2.0rem',
            },
            '@media (min-width:1000px)': {
                fontFamily: font,
                fontSize: '2.25rem',
            },
            '@media (min-width:2000px)': {
                fontFamily: font,
                fontSize: '3rem',
            },
        }
    }
});