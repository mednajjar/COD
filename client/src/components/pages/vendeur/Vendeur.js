import React from 'react'
import { makeStyles, CssBaseline, Paper , Typography} from '@material-ui/core';
import AddressForm from './AddressForm';

import { useHistory } from 'react-router-dom';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Cash on Delivery '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    titleV: {
        marginTop: '1%',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        width: '50%',
        margin: '2% auto 0%',
        padding: theme.spacing(3, 0, 5),
        [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
            width: '100%',

        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    paperVendeur: {
        width: '80%',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }
}));


const Vendeur = () => {
    const history = useHistory();
    const classes = useStyles();
  
    return (
        <Paper className={classes.paperVendeur}>
            <CssBaseline />
            <Typography component="h1" variant="h4" align="center" className={classes.titleV}>
                Devenir Vendeur
            </Typography>
          
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                    <AddressForm />
          
                    </React.Fragment>

                </Paper>
                <Copyright />
            </main>
        </Paper>
    )
}

export default Vendeur
