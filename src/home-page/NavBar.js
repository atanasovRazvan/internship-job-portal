import React, { useContext } from 'react';
import {
  AppBar, Button, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../context/AuthProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const { username, setUsername, setUserRole } = useContext(AuthContext);
  const classes = useStyles();

  const handleLogout = () => {
    setUsername(null);
    setUserRole(0);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Hello,
          {' '}
          {username}
          !
        </Typography>
        <Button color="inherit" onClick={() => handleLogout()}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
