import { Box, Typography } from '@mui/material';
import SocialButtons from '../Components/SocialButtons';
import "./LandingPage.scss"

function LandingPage() {




    return (
        <Box className='LandingPage'>
            <Box className='TitleAndLinks'>
                <Typography
                            variant="h3"
                            noWrap
                            fontWeight='bold'
                            component="div"
                            sx={{ml:3, mr: 2, paddingBottom:3,
                                display: { xs: 'none', md: 'flex' }, fontFamily:"Segoe UI"}}
                        >
                            Hi, I am Joris Kuiper! <br/>
                            I program stuff for fun<br/>
                            and try new things. <br/>
                </Typography>
                <SocialButtons/>
            </Box>
            {/* TODO Add circular photo to the right of the box that is above this in the code. */}
        </Box>
    );
}


export default LandingPage;