import { Box } from "@mui/material";
import ContactForm from "./ContactForm/ContactForm";
import { FaEnvelopeOpenText } from "react-icons/fa"
import './ContactPage.scss';

function ContactPage() {

    return (
        <Box className='contactPage' component='div' bgcolor={'primary.light'}>
            <img src={require('../../images/email.png')} alt='' className="contact-envelope"/>
            <ContactForm />
            <a className='credits' href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a>
        </Box>
    )

}

export default ContactPage;