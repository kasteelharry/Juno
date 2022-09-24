import { Box, Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function MenuBar() {

    const pages = ["About me", "Portfolio", "Contact"];
    const pagesPath = ['/about', '/portfolio', '/contact'];

    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Joris Kuiper
                    </Typography>
                    <Box sx={{ flexGrow: 1,
                        justifyContent:"right",
                        display: { xs: 'flex', md: 'flex' } }}>
              {
                pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => {
                      navigate(pagesPath[index]);
                      }}
                  sx={{ fontSize:15, marginLeft:2, marginRight:3, my: 2, color: 'white', display: 'block' }}
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