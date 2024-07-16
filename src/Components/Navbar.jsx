import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

const settings = [
  { text: 'Profile', icon: <PersonIcon />, link: '/profile' },
  { text: 'Settings', icon: <SettingsIcon />, link: '/settings' },
  { text: 'Logout', icon: <ExitToAppIcon />, link: '/' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static" style={{ backgroundColor: '#112D4E' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="logo.svg" alt="logo" height="35" />
          <MenuItem onClick={handleCloseNavMenu} component={Link} to="/home">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}
            >
              NAJDA
            </Typography>
          </MenuItem>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/dashboard">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contacts">
                <Typography textAlign="center">Contacts</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/courses">
                <Typography textAlign="center">Courses</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/ranking">
                <Typography textAlign="center">Ranking</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ position: 'absolute', left: '50%', display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/home">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}
            >
              NAJDA
            </Typography>
            </MenuItem>
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/dashboard" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Home
            </Button>
            <Button component={Link} to="/contacts" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Contacts
            </Button>
            <Button component={Link} to="/courses" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Courses
            </Button>
            <Button component={Link} to="/ranking" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Ranking
            </Button>
          </Box>

          {/* Notifications and User menu */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" sx={{ marginRight: '1rem' }}>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ mt: '45px' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu} component={Link} to={setting.link}>
                  <ListItemIcon>{setting.icon}</ListItemIcon>
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
