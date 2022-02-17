import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid , Typography} from '@material-ui/core';
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
const LivreurDash = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
             <Typography variant="h1">Dashboard</Typography>
            <Grid style={{marginBottom: '6%'}}>
                <Routes />
            </Grid>
        </Paper>
    )
}

export default LivreurDash

