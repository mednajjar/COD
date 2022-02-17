import React, { useState } from 'react'
import { makeStyles, CssBaseline, Paper, Button, Typography, Grid, TextField, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateVendeur } from '../../../redux/slices/vendeurSlice'


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
    paperVendeur: {
        width: '80%',
        margin: '1% auto',
        paddingTop: '2%',
        paddingBottom: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
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
    confirmation: {
        marginTop: theme.spacing(1),
        display: 'culomn',
        justifyContent: 'center',
    },
    bloc: {
        width: '100%',
    },
    inpt: {
        width: '100%',
    },
    btnInpt: {
        width: '100%',
        marginTop: theme.spacing(2),

    }
}));

const Validation = () => {
    const classes = useStyles();
    const history = useHistory()
    const { validateError } = useSelector(state => state.vendeur)
    const dispatch = useDispatch();
    const [code, setCode] = useState('')

    const submitCode = async () => {
        dispatch(validateVendeur(code))
        
    }


    return (
        <React.Fragment>
            <Paper className={classes.paperVendeur}>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Félicitation
                        </Typography>
                        <Typography variant="subtitle1">
                            Nous avons envoyé un code de confirmation par mail.
                            veuillez valider votre email sous de-sous:
                        </Typography>
                        <Grid container spacing={4} className={classes.confirmation}>
                            <form   validate onSubmit={submitCode} className={classes.bloc}>
                                <TextField
                                    className={classes.inpt}
                                    required
                                    id="code"
                                    label="Code de confirmation"
                                    helperText="code de confirmation email"
                                    fullWidth
                                    autoComplete="cc-email"
                                    onChange={(e) => setCode({ code: e.target.value })}
                                />
                                <Box style={{ textAlign: 'center' }}>
                                    {
                                        validateError.length > 0 && (<Typography variant="p" color="secondary" >{validateError}</Typography>)
                                    }
                                </Box>
                                <Button variant="contained" color="primary" type="submit" className={classes.btnInpt}>Confirmer</Button>
                            </form>
                        </Grid>

                    </Paper>
                </main>
            </Paper>
        </React.Fragment>
    )
}

export default Validation
