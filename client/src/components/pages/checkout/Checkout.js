import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import CartItem from './CartItem';


const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
          width: '100%', 
        },
      }
}))
const Checkout = () => {
    const classes = useStyles();
   
    return (
        <Paper className={classes.paper}>
            <h2 className="text-center">checkout page</h2>
            <div>
                <CartItem />
            </div>
        </Paper>
    )
}

export default Checkout
