import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { PersonalTheme } from "../Theme/PersonalTheme.d";
import AboutPage from "./AboutPage/AboutPage";
import LandingPage from "./LandingPage/LandingPage";
import MenuBar from "./MenuBar/MenuBar";
import Background from './Components/Background';
import ContactPage from "./Contact/ContactPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
function AppContainer() {

    return (            
        <ThemeProvider theme={PersonalTheme}>
            <meta name="viewport" content="width=device-width" />
                <Box className="AppContainer">
                    <Helmet>
                        <title>Joris Kuiper</title>
                    </Helmet>

                    <MenuBar/>
                    <Box className='background'>
                <Background />
            </Box>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/contact' element={<ContactPage/>}/>
                        <Route path='/portfolio' element={<PortfolioPage/>}/>
                    </Routes>
                    
                </Box>

            </ThemeProvider>
    )
}

export default AppContainer;