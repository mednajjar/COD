import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Routes from './routes';
// import {BrowserRouter as Router} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    paper: {
        width: '80%',
        height: 'auto',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
          width: '100%', 
        },
      }
}))
const VendeurDash = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            
                <Grid style={{marginBottom: '6%'}}>
                    <Routes />
                </Grid>
           
            </Paper>
    )
}

export default VendeurDash

