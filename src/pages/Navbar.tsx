import React, { useState, useEffect, MouseEvent } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import { useSelector} from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/userSlice';

interface FormData {
  name: string;
  email: string;
  username: string;
  mobile: string;
  agreeTerms: boolean;
}

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<FormData | null>(null);
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const existingData = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
  
    if (existingData) {
     
      setUser(existingData);
    }
  }, []);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setOpenProfile(true);
    handleClose();
  };

  const handleDrawerClose = () => {
    setOpenProfile(false);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/');
  };

  const location = useLocation();
  const pageName = location.pathname.substring(1) || 'Home';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName.charAt(0).toUpperCase() + pageName.slice(1)}
          </Typography>
          <div>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={openProfile} onClose={handleDrawerClose}>
        {user && (
          <ProfileDetails
            name={user.name}
            email={user.email}
            username={user.username}
            mobile={user.mobile}
          />
        )}
      </Drawer>
    </Box>
  );
};

export default Navbar;
