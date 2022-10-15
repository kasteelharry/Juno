import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import './MenuBar.scss';

function MenuBar() {

    const pages = ["About me", "Projects", "Portfolio", "Contact"];
    const pagesPath = ['/about', '/projects', '/portfolio', '/contact'];

    const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{ bgcolor: 'primary.main'}}>
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <img className='title-picture'
                        onClick={() => navigate('/')}
                        src={require('../../images/logo.png')}
                        alt='' />
                    <Typography
                        className='title'
                        onClick={() => navigate('/')}
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
                                    onClick={() => {
                                        navigate(pagesPath[index]);
                                    }}
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