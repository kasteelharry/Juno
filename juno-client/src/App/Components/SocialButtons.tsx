import { Box, IconButton } from '@mui/material';
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"

function SocialButtons() {

    const socialIcons = [<FaInstagram/>,
    <FaGithub/>,
    <FaLinkedin/>]
    const socialLinks = ["https://www.instagram.com/joriskuiper",
     "https://www.github.com/kasteelharry",
     "https://www.linkedin.com/in/joris-kuiper-b070b6164/"]



    return (
        <Box className='SocialBar'>
            {
                socialIcons.map((icon,index) => (
                    <IconButton
                    key={icon.type}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(socialLinks[index], "_blank", 'noopener,noreferrer')
                    }}
                    size='large'
                    sx={{color:"black",background:"aqua",marginLeft:4}}>{icon}</IconButton>
                ))
            }
            </Box>
    )
}

export default SocialButtons;