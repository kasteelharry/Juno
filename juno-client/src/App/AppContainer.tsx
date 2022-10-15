import { Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { PersonalTheme } from "../Theme/PersonalTheme.d";
import AboutPage from "./AboutPage/AboutPage";
import LandingPage from "./LandingPage/LandingPage";
import MenuBar from "./MenuBar/MenuBar";
// import Background from './Components/Background';
import ContactPage from "./Contact/ContactPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import Footer from "./Footer/Footer";
import ProjectPage from "./ProjectPage/ProjectPage";

import './AppContainer.scss';

function AppContainer() {

    return (
        <ThemeProvider theme={PersonalTheme}>
            <meta name="viewport" content="width=device-width" />
            <Box sx={{ minWidth: '100%' }}>
                <MenuBar />
            </Box>
            <Box className="AppContainer" sx={{ minHeight: '100vh', minWidth: '100vw' }}>
                <Helmet>
                    <title>Joris Kuiper</title>
                </Helmet>
                <Box>
                    {/* Removed the network moving background due to very high CPU usage. */}
                    {/* <Background /> */}
                    <img className='background' src={require('../images/background.jpg')} alt='mountains over Charmonix' />
                </Box>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/portfolio' element={<PortfolioPage />} />
                    <Route path='/projects' element={<ProjectPage />} />
                </Routes>
            </Box>
            <Box sx={{ minWidth: '100%' }}>
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default AppContainer;