import React, { useState, useEffect } from 'react'
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useCart } from "react-use-cart";
import itemData from '../layouts/Data';
import CategoryData from '../layouts/CategoryData';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper:{
        width: '80%',
        margin: '1% auto',
        padding: '1%',
    },
    content: {
        width: '80%',
        margin: '1% auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    imageList: {
        width: '100%',
        margin: '0% auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',

        },
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    itemBar: {
        height: '12vh',
        padding: '1%',
        [theme.breakpoints.down('sm')]: {
            height: '16vh',
        },
    }

}));


const Categories = () => {
    const classes = useStyles();
    const { category } = useParams()
    const { addItem } = useCart();

    return (
        <Paper className={classes.paper}>
            {
                CategoryData.map((cat)=>cat.slug === category && (
                <Grid className="d-flex flex-row justify-content-between bg-light p-2 text-dark rounded">
                    <Typography>Categorie - {cat.category}</Typography>
                    <Link to="/store" className="text-decoration-none" >Voir tous </Link>
                </Grid> ))
            }
            
            <Grid continer className={classes.content} >
                <ImageList className={classes.imageList}>
                    {
                     itemData.map((item) => item.category === category && (
                        <ImageListItem key={item.id} style={{ width: 280, height: 'auto', margin: '2%' }}>
                            <Link to={`/product/${item.id}`} >
                                <img src={item.img} alt={item.title} style={{ width: '100%' }} />
                            </Link>
                            <ImageListItemBar
                                className={classes.itemBar}
                                title={item.title}
                                subtitle={<><h3>Prix: {item.price} MAD</h3><br></br><span>by: {item.author}</span></>}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        <ShoppingCartIcon onClick={() => addItem(item)} />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    )) 
                    }
                </ImageList>

            </Grid>

        </Paper>
    )
}

export default Categories
