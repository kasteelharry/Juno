
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { ThemeProvider } from '@mui/material/styles';
import { PersonalTheme } from "../Theme/PersonalTheme.d";
import MenuBar from "./MenuBar/MenuBar";
import Image from 'next/image';
// import Background from './Components/Background';

import styles from '../styles/Layout.module.scss';
import Footer from "./Footer/Footer";

export default function Layout({ children }:any) {
    return <div>
        <ThemeProvider theme={PersonalTheme}>
            <meta name="viewport" content="width=device-width" />
            <Box sx={{ minWidth: '100%' }}>
                <MenuBar />
            </Box>
            <Box className={styles.AppContainer} sx={{ minHeight: '100vh', minWidth: '100vw' }}>
                <Helmet>
                    <title>Joris Kuiper</title>
                </Helmet>
                {children}
                <Box className={styles.backgroundBox}>
                    {/* Removed the network moving background due to very high CPU usage. */}
                    {/* <Background /> */}
                    <Image className={styles.background} 
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                    objectPosition={'10% 70%'}
                    src={require('../public/images/background.jpg')} 
                    alt='mountains over Charmonix' />
                </Box>
            </Box>
            <Box sx={{ minWidth: '100%' }}>
                <Footer/>
            </Box>
        </ThemeProvider>
        </div>;
  }