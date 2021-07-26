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
const Offre = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h2 className="text-center">Offre page</h2>
        </Paper>
    )
}

export default Offre
