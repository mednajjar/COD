import useStyles from './styles';
import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';





const UpBar = () => {
  const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange1 = (e)=>{
      e.preventDefault();
      history.push('/vendeur');
      return handleClose()
    }
    const handleChange2 = (e)=>{
      e.preventDefault();
      history.push('/livreur');
      return handleClose()
    }
    const handleChange3 = (e)=>{
      e.preventDefault();
      history.push('/contact');
      return handleClose()
    }
    const handleChange4 = (e)=>{
      e.preventDefault();
      history.push('/login');
      return handleClose()
    }
    const handleChange5 = (e)=>{
      e.preventDefault();
      history.push('/register');
      return handleClose()
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.toggleMenu}
          >
            <MenuItem onClick={(e)=>handleChange1(e)}>Devenir vendeur</MenuItem>
            <MenuItem onClick={(e)=>handleChange2(e)}>Devenir livreur</MenuItem>
            <MenuItem onClick={(e)=>handleChange3(e)}>Contact us</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            COD
          </Typography>
          <Button color="inherit" onClick={(e)=>handleChange5(e)}>Register</Button>
          <Button color="inherit" onClick={(e)=>handleChange4(e)}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default UpBar
