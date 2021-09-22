import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Routes from './routes';

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
const  AdminDash = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid style={{marginBottom: '6%'}}>
                <Routes />
            </Grid>
        </Paper>
    )
}

export default AdminDash

