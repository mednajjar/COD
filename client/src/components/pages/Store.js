import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import Products from '../layouts/Products';

const useStyles = makeStyles((theme) => ({
    paper:{
        width: '80%',
        margin: '1% auto',
        padding: '1%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
          },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
    },   

}));

const Store = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid className="p-2 bg-light">
                <Typography>Tous les Produits</Typography>
            </Grid>
            <Products />
        </Paper>
    )
}

export default Store
