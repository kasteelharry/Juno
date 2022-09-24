import { createTheme } from '@mui/material/styles';

export const PersonalTheme = createTheme({
    palette: {
        primary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff"
        },
        secondary: {
            main: '#f50057',
        },
    },
});