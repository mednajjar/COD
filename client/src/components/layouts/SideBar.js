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
import { Link } from 'react-router-dom';
const info = "informatique"
const SideBar = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paperSideBar} variant="outlined" square>
            <MenuList>
            <MenuItem><ComputerIcon className={classes.iconSpace} /><Link to="/category/informatique" className="text-decoration-none text-dark">Informatique</Link></MenuItem>
            <MenuItem><KitchenIcon className={classes.iconSpace} /><Link to="/category/Electroménager" className="text-decoration-none text-dark">Electroménager</Link></MenuItem>
            <MenuItem><AccessibilityIcon className={classes.iconSpace} /><Link to="/category/Vêtement_&_Chaussures" className="text-decoration-none text-dark">Vêtement & Chaussures</Link></MenuItem>
            <MenuItem><BrushIcon className={classes.iconSpace} /><Link to="/category/Beauté_&_Santé" className="text-decoration-none text-dark">Beauté & Santé</Link></MenuItem>
            <MenuItem><HomeIcon className={classes.iconSpace}/><Link to="/category/Maison_&_Cuisine" className="text-decoration-none text-dark">Maison & Cuisine</Link></MenuItem>
            <MenuItem><PhoneAndroidIcon className={classes.iconSpace}/><Link to="/category/Téléphone_&_Tablette" className="text-decoration-none text-dark">Téléphone & Tablette</Link></MenuItem>
            <MenuItem><SportsBasketballIcon className={classes.iconSpace} /><Link to="/category/Sports_&_Loisirs" className="text-decoration-none text-dark">Sports & Loisirs</Link></MenuItem>
            <MenuItem><ListIcon className={classes.iconSpace}/><Link to="/category/Autres_catégories" className="text-decoration-none text-dark">Autres catégories</Link></MenuItem>
            </MenuList>
        </Paper>
    )
}

export default SideBar
