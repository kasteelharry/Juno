import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import validator from 'validator';
import emailjs from '@emailjs/browser';

import styles from '../../../styles/ContactForm.module.scss';

function ContactForm() {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    function submitEvent() {
        const input = {
            firstName,
            lastName,
            email,
            message
        };
        emailjs.send('service_eleywhd', 'template_juno', input, 'DhlSjEIG2o2YB5ORY')
            .then((result) => {
                //Reload the page
                //TODO inform the user that the contact form has been send
                window.location.reload();
                console.log(result.text);
            }, (error) => {
                //TODO give error message.
                console.log(error.text);
            });
    };

    return (
        <Box className={styles.contactForm}
            component='form'
            onSubmit={(e: any) => {
                e.preventDefault()
                submitEvent();
            }}
        >
            <Typography className={styles.aboutText}
                variant="h4"
                noWrap
                fontWeight='bold'
                component="div"
                sx={{
                    mb:2, fontFamily: "Segoe UI"
                }}>
                Contact me:
            </Typography>
            <Box className={styles.contactName}>
                <TextField
                    className={styles.contactName}
                    label='First name'
                    required
                    variant='outlined'
                    onChange={e => setFirstName(validator.escape(e.target.value))}
                />
            </Box>

            <Box className={styles.contactName}>
                <TextField
                    className={styles.contactName}
                    label='Last name'
                    required
                    variant='outlined'
                    onChange={e => setLastName(validator.escape(e.target.value))}
                />
            </Box>

            <Box className={styles.contactEmail}>
                <TextField
                    className={styles.contactEmail}
                    label='Email address'
                    required
                    variant='outlined'
                    error={(email.length > 0) && !validator.isEmail(email)}
                    onChange={e => setEmail("" + validator.normalizeEmail(validator.escape(e.target.value)))}
                />
            </Box>

            <Box className={styles.contactText}>
                <TextField
                    className={styles.contactText}
                    label='Message'
                    required
                    variant='outlined'
                    multiline
                    rows={4}
                    onChange={e => setMessage(validator.escape(e.target.value))}
                />
            </Box>

            <Box className={styles.contactButton}>
                <Button
                    className={styles.contactButton}
                    type='submit'
                    variant="contained"
                >Send message</Button>
            </Box>

        </Box>
    )

}

export default ContactForm;