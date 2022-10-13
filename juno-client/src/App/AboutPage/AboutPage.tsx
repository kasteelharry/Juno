import { Box, ListItem, Typography, List, ListItemText } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import './AboutPage.scss';

function AboutPage() {

    const theme = useTheme();

    function getAge(birthday:Date) {
        const ms = (new Date()).getTime() - birthday.getTime();
      
        const date = new Date(ms);
        return Math.abs(date.getUTCFullYear() - 1970);
      }

    return (
        <Box className='aboutContainer' bgcolor={theme.palette.primary.light}>
            <Box className="aboutText">
            <Typography className='about-title'
                    variant="h4"
                    noWrap
                    fontWeight='bold'
                    component="div"
                    sx={{
                        ml: 3, mr: 2, fontFamily: "Segoe UI"
                    }}>
                        About me:
                </Typography>
                <Typography className='about-text'
                    variant="h6"
                    component="div"
                    sx={{
                        ml: 3, mr: 2, mt: 2, fontFamily: "Segoe UI"
                    }}>
                        I am a computer science student trying to learn more about the wondrous world of computer science. Currently familiar with building API's in both TypeScript and 
                        Java. <br/><br/>I fell in love with programming and computers and a very early age when I blew up my first computer. Two-three blown up computers later and I am still interested in
                        blowing up more (or write code for them). Lately I have been practising in building front-end websites with the React framework. I am using this website to improve my skills and as they improve so
                        will this website.
                </Typography>
            </Box>
            <img className='AboutPhoto' src={require('../../images/aboutJoris.jpg')} alt='' loading='lazy'/>
            <Box className='details'>
                <Typography className='details-title'
                    variant="h4"
                    noWrap
                    fontWeight='bold'
                    component="div"
                    sx={{
                        ml: 3, mr: 2, fontFamily: "Segoe UI"
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