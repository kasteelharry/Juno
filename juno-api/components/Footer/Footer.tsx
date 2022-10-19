import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import styles from '../../styles/Footer.module.scss'
import SocialButtons from '../Social/SocialButtons';

function Copyright() {
  return (
    <Typography className={styles.footer}
    variant="body2"
    color="text.primary"
    sx={{mt:2.5}}>
      {'Copyright © '}
      <Link color="inherit" href="https://joriskuiper.com/">
        Joris Kuiper
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '0',
      }}
    >
      <Box
        component="footer"
        sx={{
            float:'left',
          py: 3,
          px: 2,
          mt: 'auto',
          width: 'auto',
          backgroundColor: 'primary.main'
        }}
      >
        <Box className='bar'></Box>
        <Copyright />
          <SocialButtons className={styles.buttonsFooter}/>
      </Box>
    </Box>
  );
}

export default Footer;