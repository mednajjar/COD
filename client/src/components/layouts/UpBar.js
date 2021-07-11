import useStyles from './styles';
import React from 'react';
import {AppBar, Toolbar, IconButton, Menu, MenuItem, CardMedia} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';
import logo from './cashondelivery.png'





const UpBar = () => {
  const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" className={classes.menu}>
        <Toolbar className={classes.space} >
          
        <CardMedia
          className={classes.media}
          image={logo}
          title="Contemplative Reptile"
        />
        
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon className={classes.btn} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.toggleMenu}
          >
            <MenuItem onClick={()=>{history.push('/'); return handleClose()}}>Accueil</MenuItem>
            <MenuItem onClick={()=>{history.push('/vendeur'); return handleClose()}}>Devenir vendeur</MenuItem>
            <MenuItem onClick={()=>{history.push('/livreur'); return handleClose()}}>Devenir livreur</MenuItem>
            <MenuItem onClick={()=>{history.push('/contact'); return handleClose()}}>Contact us</MenuItem>
            <MenuItem onClick={()=>{history.push('/register'); return handleClose()}}>Register</MenuItem>
            <MenuItem onClick={()=>{history.push('/login'); return handleClose()}}>Login</MenuItem>
            <MenuItem onClick={()=>{}}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default UpBar
