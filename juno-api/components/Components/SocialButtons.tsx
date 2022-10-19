import { Box, IconButton } from '@mui/material';
import React from 'react';
import {FaInstagram, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"

function SocialButtons(props?:any) {

    const socialIcons = [<FaInstagram key=''/>,
    <FaGithub key=''/>,
    <FaLinkedin key=''/>,
    <FaEnvelope key=''/>]
    const socialLinks = ["https://www.instagram.com/joriskuiper",
     "https://www.github.com/kasteelharry",
     "https://www.linkedin.com/in/joris-kuiper-b070b6164/",
    "mailto:joriskuiper2@gmail.com"]

    const className = props.className !== undefined ? props.className : 'SocialBar'


    return (
        <Box className={className}>
            {
                socialIcons.map((icon,index) => (
                    <IconButton
                    key={icon.type}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(socialLinks[index], "_blank", 'noopener,noreferrer')
                    }}
                    size='large'
                    sx={{color:"black",bgcolor:"primary.light",marginLeft:4}}>{icon}</IconButton>
                ))
            }
            </Box>
    )
}

export default SocialButtons;