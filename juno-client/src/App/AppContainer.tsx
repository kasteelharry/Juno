import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import { PersonalTheme } from "../Theme/PersonalTheme.d";
import LandingPage from "./LandingPage/LandingPage";
import MenuBar from "./MenuBar/MenuBar";
function AppContainer() {

    return (            
        <ThemeProvider theme={PersonalTheme}>
            <meta name="viewport" content="width=device-width" />
                <Box className="AppContainer">
                    <Helmet>
                        <title>Joris Kuiper</title>
                    </Helmet>

                    <MenuBar/>
                    <LandingPage/>
                </Box>

            </ThemeProvider>
    )
}

export default AppContainer;