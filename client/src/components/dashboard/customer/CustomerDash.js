import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


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
const CustomerDash = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h2 className="text-center">Customer Dashboard page</h2>
            <div className="d-flex justify-content-around mt-5">
                <h1>Hello Customer</h1>
            </div>
        </Paper>
    )
}

export default CustomerDash

