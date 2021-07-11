import React from 'react'
import { makeStyles, CssBaseline, Paper, Stepper, Step, StepLabel, Button, Typography, Grid, TextField} from '@material-ui/core';
import AddressForm from './AddressForm';
import PaymentForm from './CompteForm';
import Review from './Review';
import {useHistory} from 'react-router-dom';


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
        marginTop: '3%',
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
    confirmation:{
        marginTop: theme.spacing(1),     
        display: 'culomn',
        justifyContent: 'center',
    },
    bloc:{
    width: '100%', 
    },
    inpt:{
        width: '100%',
    }, 
    btnInpt:{
        width: '100%',
        marginTop: theme.spacing(2),
        
    },
    

    
   
}));

const steps = ['Informations', 'Compte', 'validation'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}
const Vendeur = () => {
    const history = useHistory();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handlePush = ()=>{
        history.push('/packs')
    }
    return (
        <React.Fragment>
            <CssBaseline />
                <Typography component="h1" variant="h4" align="center" className={classes.titleV}>
                    Devenir Vendeur
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Félicitation
                                </Typography>
                                <Typography variant="subtitle1">
                                Votre compte à été enregistré avec succès. Nous avons envoyé un code de confirmation par email. 
                                veuillez valider votre email sous de-sous:
                                </Typography>
                                <Grid container spacing={4} className={classes.confirmation}>
                                    <Grid item xs={12} md={6} className={classes.bloc}>
                                    <TextField
                                        className={classes.inpt}
                                        required
                                        id="code"
                                        label="Code de confirmation"
                                        helperText="code de confirmation email"
                                        fullWidth
                                        autoComplete="cc-email"
                                    />
                                <Button variant="contained" color="primary" onClick={handlePush} className={classes.btnInpt}>Confirmer</Button>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                          
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={classes.button}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Valider' : 'Next'}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    )
}

export default Vendeur
