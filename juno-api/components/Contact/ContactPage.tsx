import { Box } from "@mui/material";
import ContactForm from "./ContactForm/ContactForm";
import Image from "next/image";
import styles from '../../styles/ContactPage.module.scss';
function ContactPage() {

    return (
        <Box className={styles.contactPage} component='div' bgcolor={'primary.light'}>
            <Box className={styles.contactImage}>
                <Image
                    layout="intrinsic"
                    src={require('../../public/images/email.png')}
                    alt=''
                    className={styles.contactImage}
                />
            </Box>
            <ContactForm />
            <a className={styles.credits} href="https://www.flaticon.com/free-icons/mail" title="mail icons">Mail icons created by Freepik - Flaticon</a>
        </Box>
    )

}

export default ContactPage;