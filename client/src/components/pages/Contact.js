import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, TextField } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import { sky } from '../../assets';
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
  formContent: {
    position: 'absolute',
    paddingTop: '3%',
    paddingBottom: '3%',
    backgroundColor: 'transparent',
    top: '12%',
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
  leftCard: {
    height: 'auto',
    marginTop: '3%',
    marginBottom: '3%',
    lineHeight: 6
  },
  rightCard: {
    height: 'auto',
    marginTop: '3%',
    marginBottom: '3%'
  },
  flexContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap-reverse',

  },
  contact: {
    width: '100%',
    textAlign: 'center',
  }


}))
const Contact = () => {
  const classes = useStyles();

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");

  const [prenomHelper, setPrenomHelper] = useState("");
  const [nomHelper, setNomHelper] = useState("");
  const [messageHelper, setMessageHelper] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [sujetHelper, setSujetHelper] = useState("");

  const handlChange = e => {
    let valid;
    switch (e.target.id) {
      case "prenom":
        setPrenom(e.target.value)
        valid = prenom.length > 1;
        !valid ? setPrenomHelper("Doit contenir au mois 3 lettres!") : setPrenomHelper("")
        break;
      case "nom":
        setNom(e.target.value)
        valid = nom.length > 1;
        !valid ? setNomHelper("Doit contenir au mois 3 lettres!") : setNomHelper("")
        break;
      case "message":
        setMessage(e.target.value)
        valid = message.length > 4;
        !valid ? setMessageHelper("Message obligatoire") : setMessageHelper("")
        break;
      case "email":
        setEmail(e.target.value)
        valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
        !valid ? setEmailHelper("Saisi un email valid!") : setEmailHelper("")
        break;
      case "sujet":
        setSujet(e.target.value)
        valid = sujet.length > 4;
        !valid ? setSujetHelper("Sujet obligatoire") : setSujetHelper("")
        break;
      default:
        break;
    }
  }
  const notify = () => toast("Message sent");
  console.log(handlChange.length)
  return (
    <Paper className={classes.paper} >
      <Grid xs={12} sm={12} md={12} lg={12} className={classes.redBack} style={{ backgroundImage: `url(${sky})` }}></Grid>
      <Grid container xs={11} sm={11} md={8} lg={8} className={classes.formContent} >
        <div className={classes.contact}>
          <h4>Contactez nous</h4>
        </div>
        <div className={classes.flexContent}>
          <Grid item xs={11} sm={11} md={5} lg={5} className={classes.leftCard}>
            <Typography className="lh-lg mt-2"><RoomIcon /> Quartier el nasr, rue taqadom N09, Youssoufia.</Typography>
            <Typography className="lh-lg mt-2"><EmailIcon /> contact@cashondelivery.ma</Typography>
            <Typography className="lh-lg mt-2"><PhoneIcon /> +212-666-01-18-18</Typography>
            <Typography className="lh-lg mt-2"><PhoneIcon /> +212-665-01-18-18</Typography>
            <div className="d-flex justify-content-between col-6 ">
              <Link to=""><FacebookIcon className="fs-2" /></Link>
              <Link to=""><TwitterIcon className="fs-2" /></Link>
              <Link to=""><LinkedInIcon className="fs-2" /></Link>
              <Link to=""><ShopTwoIcon className="fs-2" /></Link>
            </div>
          </Grid>
          <Grid item xs={11} sm={11} md={5} lg={5} className={classes.rightCard}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={prenomHelper.length !== 0}
                  helperText={prenomHelper}
                  id="prenom"
                  name="prenom"
                  label="Prénom"
                  fullWidth
                  onChange={handlChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  error={nomHelper.length !== 0}
                  helperText={nomHelper}
                  id="nom"
                  name="nom"
                  label="Nom"
                  fullWidth
                  onChange={handlChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={sujetHelper.length !== 0}
                  helperText={sujetHelper}
                  id="sujet"
                  name="sujet"
                  label="Sujet"
                  fullWidth
                  onChange={handlChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  onChange={handlChange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  className="col-12 bg-transparent"
                  error={messageHelper.length !== 0}
                  helperText={messageHelper}
                  id="message"
                  label="Message *"
                  multiline
                  maxRows={4}
                  onChange={handlChange}
                />
              </Grid>
            </Grid>
            <button className="btn btn-primary col-12 mt-4" onClick={notify}>Send</button>
            <ToastContainer />
          </form>
          </Grid>
        </div>
      </Grid>
    </Paper>
  )
}

export default Contact
