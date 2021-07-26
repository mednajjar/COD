import React from 'react';
import { Paper, MenuList, MenuItem } from '@material-ui/core';
import useStyles from './styles'
import ComputerIcon from '@material-ui/icons/Computer';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ListIcon from '@material-ui/icons/List';
import BrushIcon from '@material-ui/icons/Brush';
const SideBar = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paperSideBar} variant="outlined" square>
            <MenuList>
            <MenuItem><ComputerIcon className={classes.iconSpace} />Informatique</MenuItem>
            <MenuItem><KitchenIcon className={classes.iconSpace} />Electroménager</MenuItem>
            <MenuItem><AccessibilityIcon className={classes.iconSpace} />Vêtement & Chaussures</MenuItem>
            <MenuItem><BrushIcon className={classes.iconSpace} />Beauté & Santé</MenuItem>
            <MenuItem><HomeIcon className={classes.iconSpace}/>Maison & Cuisine</MenuItem>
            <MenuItem><PhoneAndroidIcon className={classes.iconSpace}/>Téléphone & Tablette</MenuItem>
            <MenuItem><SportsBasketballIcon className={classes.iconSpace} />Sports & Loisirs</MenuItem>
            <MenuItem><ListIcon className={classes.iconSpace}/>Autres catégories</MenuItem>
            </MenuList>
        </Paper>
    )
}

export default SideBar
