import { Box, ListItem, Typography, List, ListItemText } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

import styles from '../../styles/AboutPage.module.scss';

function AboutPage() {

    const theme = useTheme();

    function getAge(birthday:Date) {
        const ms = (new Date()).getTime() - birthday.getTime();
      
        const date = new Date(ms);
        return Math.abs(date.getUTCFullYear() - 1970);
      }

    return (
        <Box className={styles.aboutContainer} bgcolor={theme.palette.primary.light}>
            <Box className={styles.aboutText}>
            <Typography className={styles.aboutTitle}
                    variant="h4"
                    noWrap
                    fontWeight='bold'
                    component="div"
                    sx={{
                        ml: '4vw', mr: '2vw', fontFamily: "Segoe UI"
                    }}>
                        About me:
                </Typography>
                <Typography className={styles.aboutText}
                    variant="h6"
                    component="div"
                    sx={{
                        ml: '1vw', mr: '3vw', mt: '1vh', fontFamily: "Segoe UI"
                    }}>
                        I am a computer science student trying to learn more about the wondrous world of computer science. Currently familiar with building API&apos;s in both TypeScript and 
                        Java. <br/><br/>I fell in love with programming and computers and a very early age when I blew up my first computer. Two-three blown up computers later and I am still interested in
                        blowing up more (or write code for them). Lately I have been practising in building front-end websites with the React framework. I am using this website to improve my skills and as they improve so
                        will this website.
                </Typography>
            </Box>
            <Box className={styles.AboutPhotoBox}>
            <Image className={styles.AboutPhoto} layout='intrinsic' src={require('../../public/images/aboutJoris.jpg')} alt='' loading='lazy'/>
            </Box>
            <Box className={styles.details}>
                <Typography className={styles.detailsTitle}
                    variant="h4"
                    noWrap
                    fontWeight='bold'
                    component="div"
                    sx={{
                        ml: '2vw', mr: '3vw', fontFamily: "Segoe UI"
                    }}>
                        Details
                </Typography>
                <List>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{fontSize: '22px', fontWeight:'bold', fontFamily:'Segoe UI'}} 
                    secondaryTypographyProps={{fontSize: '18px',color:'black', fontFamily:'Segoe UI'}} 
                    primary="Name"
                    secondary="Joris Samuël Kuiper"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{fontSize: '22px', fontWeight:'bold', fontFamily:'Segoe UI'}} 
                    secondaryTypographyProps={{fontSize: '18px',color:'black', fontFamily:'Segoe UI'}} 
                    primary="Age"
                    secondary={getAge(new Date('2001-01-26'))}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{fontSize: '22px', fontWeight:'bold', fontFamily:'Segoe UI'}} 
                    secondaryTypographyProps={{fontSize: '18px',color:'black', fontFamily:'Segoe UI'}} 
                    primary="Location"
                    secondary="Enschede, Overijssel, The Netherlands"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={{fontSize: '22px', fontWeight:'bold', fontFamily:'Segoe UI'}} 
                    secondaryTypographyProps={{fontSize: '18px',color:'black', fontFamily:'Segoe UI'}} 
                    primary="Favorite programming language"
                    secondary="TypeScript"
                  />
                </ListItem>
            </List>
            </Box>
        </Box>
    )

}


export default AboutPage;