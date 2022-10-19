import { Box, Typography } from '@mui/material';

import SocialButtons from '../Components/SocialButtons';

import "./LandingPage.scss"

function LandingPage() {
    return (
        <Box className='LandingPage'>
            <Box className='content'>
                    <Box className='TitleAndLinks'>
                        <Typography
                            className='titleText'
                            variant="h3"
                            noWrap
                            fontWeight='bold'
                            component="div"
                            sx={{
                                ml: '5%', mr: '2%', paddingBottom: 3, fontFamily: "Segoe UI"
                            }}
                        >
                            Hi, I am Joris Kuiper <br />
                            I program stuff for fun<br />
                            and try new things. <br />
                        </Typography>
                        
                    <SocialButtons />
                    </Box>
                    <Box className='ProfilePhotoBox'>
                        <img className='ProfilePhoto' src={require('../../images/joris.jpg')} alt='Joris Kuiper' loading='lazy'/>
                    </Box>

            </Box>
            
        </Box>
    );
}


export default LandingPage;