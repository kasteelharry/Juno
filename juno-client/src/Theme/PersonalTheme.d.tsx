import { createTheme } from '@mui/material/styles';

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
    typography: {
        h3: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:900px)': {
                fontSize: '3rem',
            },
            '@media (min-width:1000px)': {
                fontSize: '3.5rem',
            },
            '@media (min-width:2000px)': {
                fontSize: '4.5rem',
            },
        },
        h4: {
            fontSize: '2rem',
            '@media (min-width:600px)': {
                fontSize: '2.25rem',
            },
            '@media (min-width:900px)': {
                fontSize: '2.5rem',
            },
            '@media (min-width:1000px)': {
                fontSize: '2.25rem',
            },
            '@media (min-width:2000px)': {
                fontSize: '3rem',
            },
        }
    }
});