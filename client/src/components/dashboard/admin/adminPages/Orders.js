import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


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
const Orders = () => {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid item lg={8} className="text-center bg-light mx-auto">
                <Typography> Orders page </Typography>
            </Grid>
        </Grid>
    )
}

export default Orders

