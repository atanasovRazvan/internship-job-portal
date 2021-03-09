import React, { useContext } from 'react';
import {
  AppBar, Button, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import './styles.css';
import MenuIcon from '@material-ui/icons/Menu';
import { AuthContext } from '../context/AuthProvider';

const NavBar = () => {
  const { username, setUsername, setUserRole } = useContext(AuthContext);

  const handleLogout = () => {
    setUsername(null);
    setUserRole(0);
  };

  return (
    <AppBar position="fixed">
      <Toolbar className="navbar">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className="navbar-title" variant="h6">
          Hello,
          {' '}
          {username}
          !
        </Typography>
        <Button color="inherit" className="logout-button" onClick={() => handleLogout()}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
