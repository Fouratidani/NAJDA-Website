import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const CustomAppBar = styled(AppBar)(({ isNavbarVisible }) => ({
  transition: 'top 0.3s',
  backgroundColor: '#112D4E',
  color: '#fff',
  position: 'fixed',
  width: '100%',
  top: isNavbarVisible ? '0' : '-100px',
  zIndex: 1000,
  marginBottom: '0 !important',
}));

const BrandLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  marginLeft: '-3rem',
});

const NavLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  margin: '0 8px',
});

const CustomButton = styled(Button)({
  marginRight: '8px',
});

const CustomNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollTop) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollTop = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CustomAppBar isNavbarVisible={isNavbarVisible}>
      <Container>
        <Toolbar>
          <img src="logo.svg" alt="blank" height={'25rem'} style={{marginRight:'.5rem'}}/>
          <Typography variant="h6" component={BrandLink} to="/">
            Najda
          </Typography>
          <Box display="flex" ml="auto">
            <CustomButton component={NavLink}
              to="/About" variant="contained"
              color="secondary"
              className="button">
            About Us
            </CustomButton>
            <CustomButton
              component={NavLink}
              to="/signup"
              variant="contained"
              color="secondary"
              className="button"
            >
              Become a Member
            </CustomButton>
            <CustomButton
              component={NavLink}
              to="/login"
              variant="contained"
              color="secondary"
              className="button"
            >
              Login
            </CustomButton>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

export default CustomNavbar;
