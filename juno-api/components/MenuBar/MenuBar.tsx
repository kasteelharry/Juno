import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/router'
import styles from '../../styles/MenuBar.module.scss';

function MenuBar() {

    const pages = ["About me", "Portfolio", "Gallery", "Contact"];
    const pagesPath = ['/about', '/portfolio', '/gallery', '/contact'];

    const router = useRouter();

    // const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main'}}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Box className={styles.titlePicture}>

                    <Image
                        onClick={() => router.push('/')}
                        src={require('../../public/images/logo.png')}
                        layout="intrinsic"
                        alt='' />
                        </Box>
                    <Typography
                        className={styles.title}
                        onClick={() => router.push('/')}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ pr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Joris Kuiper
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        justifyContent: "right",
                        display: { xs: 'flex', md: 'flex' }
                    }}>
                        {
                            pages.map((page, index) => (
                                <Button
                                    key={page}
                                    onClick={() => router.push(pagesPath[index])}
                                    sx={{ fontSize: 15, paddingLeft: '2%', paddingRight: '3%', py: '1%', color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );

}

export default MenuBar;