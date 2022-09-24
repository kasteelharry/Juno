import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import { PersonalTheme } from "../Theme/PersonalTheme.d";
import MenuBar from "./MenuBar/MenuBar";
function AppContainer() {

    return (            
        <ThemeProvider theme={PersonalTheme}>
                <Box className="AppContainer">
                    <Helmet>
                        <title>Joris Kuiper</title>
                    </Helmet>

                    <MenuBar/>
                </Box>

            </ThemeProvider>
    )
}

export default AppContainer;