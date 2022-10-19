import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import SocialButtons from '../Social/SocialButtons';

import styles from "../../styles/LandingPage.module.scss"

function LandingPage() {
    return (
        <Box className='LandingPage'>
            <Box className={styles.content}>
                    <Box className={styles.TitleAndLinks}>
                        <Typography
                            className={styles.titleText}
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
                    <Box className={styles.ProfilePhotoBox2}>
                        <Image className={styles.ProfilePhoto} src={require('../../public/images/joris.jpg')} alt='Joris Kuiper' loading='lazy'/>
                    </Box>

            </Box>
            
        </Box>
    );
}


export default LandingPage;