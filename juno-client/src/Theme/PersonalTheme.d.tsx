import { createTheme } from '@mui/material/styles';

export const PersonalTheme = createTheme({
    palette: {
        primary: {
            light: "#7986cb",
            main: "#005775",
            dark: "#303f9f",
            contrastText: "#fff"
        },
        secondary: {
            main: '#f50057',
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
        }
    }
});