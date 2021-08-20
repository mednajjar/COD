import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, TextField } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';
import {sky} from '../../assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        width: '80%',
        height: '70vh',
        margin: '1% auto',
        [theme.breakpoints.down('sm')]: {
          width: '100%', 
          height: '120vh'
        },
      },
      redBack: { 
        opacity: .5,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 0,
          },
      },
      formContent:{
        position: 'absolute',
        paddingTop: '3%',
        paddingBottom: '3%',
        backgroundColor: 'transparent',
        top: '17%',
        height: 'auto',
        left: 0, 
        right: 0,
        marginLeft: 'auto', 
        marginRight: 'auto',
        boxShadow: '0px 0px 17px 3px rgba(0,0,0,0.47)',
        webkitBoxShadow: '0px 0px 17px 3px rgba(0,0,0,0.47)',
        mozBoxShadow: '0px 0px 17px 3px rgba(0,0,0,0.47)',
        borderRadius: '5px',
        [theme.breakpoints.down('sm')]: {
            top: '4%',
          },
      },
      leftCard:{
        height: 'auto',
        marginTop: '3%',
        marginBottom: '3%',
        lineHeight: 6
      },
      rightCard:{
        height: 'auto',
        marginTop: '3%',
        marginBottom: '3%'
      },
      flexContent:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap-reverse',
    
      },
      contact:{
          width: '100%',
          textAlign: 'center',
      }
     
      
}))
const Contact = () => {
    const classes = useStyles();
    const notify = () => toast("Message sent");
    return (
        <Paper className={classes.paper} >
            <Grid xs={12} sm={12} md={12} lg={12} className={classes.redBack} style={{backgroundImage: `url(${sky})`}}></Grid>
            <Grid container xs={11} sm={11} md={8} lg={8} className={classes.formContent} >
                <div className={classes.contact}>
                    <h4>Contactez nous</h4>
                </div>
                <div className={classes.flexContent}>
                <Grid item xs={11} sm={11} md={5} lg={5} className={classes.leftCard}>
                    <Typography className="lh-lg mt-2"><RoomIcon/> Quartier el nasr, rue taqadom N09, Youssoufia.</Typography>
                    <Typography className="lh-lg mt-2"><EmailIcon/> contact@cashondelivery.ma</Typography>
                    <Typography className="lh-lg mt-2"><PhoneIcon/> +212-666-01-18-18</Typography>
                    <Typography className="lh-lg mt-2"><PhoneIcon/> +212-665-01-18-18</Typography>
                    <div className="d-flex justify-content-between col-6 ">
                        <Link to=""><FacebookIcon className="fs-2" /></Link>
                        <Link to=""><TwitterIcon className="fs-2" /></Link>
                        <Link to=""><LinkedInIcon className="fs-2" /></Link>
                        <Link to=""><ShopTwoIcon className="fs-2" /></Link>
                    </div>
                </Grid>
                <Grid item xs={11} sm={11} md={5} lg={5} className={classes.rightCard}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="prenom"
                        name="prenom"
                        label="Prénom"
                        fullWidth
                        autoComplete="given-name"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="nom"
                        name="nom"
                        label="Nom"
                        fullWidth
                        autoComplete="family-name"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="sujet"
                        name="sujet"
                        label="Sujet"
                        fullWidth
                        autoComplete="sujet"
                    />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <TextField
                        className="col-12 bg-transparent"
                        id="filled-multiline-flexible"
                        label="Message *"
                        multiline
                        maxRows={4}
                        onChange=""
                    
                        />
                    </Grid>
                </Grid>
                    <button className="btn btn-primary col-12 mt-4" onClick={notify}>Send</button>
                    <ToastContainer />
                </Grid>
                </div>
            </Grid>
        </Paper>
    )
}

export default Contact
