import React,{useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import useStyles from '../auth/RegisterStyles';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Cash on Delivery '} 
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const Livreur = () => {
    const classes = useStyles();

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [prenomHelper, setPrenomHelper] = useState("");
    const [nomHelper, setNomHelper] = useState("");
    const [addressHelper, setAddressHelper] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [passwordHelper, setPasswordHelper] = useState("");

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
        case "address":
          setAddress(e.target.value)
          valid = address.length > 4;
          !valid ? setAddressHelper("Address obligatoire") : setAddressHelper("")
          break;
        case "email":
          setEmail(e.target.value)
          valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
          !valid ? setEmailHelper("Saisi un email valid!") : setEmailHelper("")
          break;
        case "password":
          setPassword(e.target.value)
          valid = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(e.target.value);
          !valid ? setPasswordHelper("Doit contenir au moins 6 lettre et 1 charactère @$!%*#?& ") : setPasswordHelper("")
          break;
        default:
          break;
      }
    }

    return (
      <Paper className={classes.paperLivreur}>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <TwoWheelerIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Devenir livreur
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="prenom"
                error={prenomHelper.length !== 0}
                helperText={prenomHelper}
                required
                fullWidth
                id="prenom"
                label="Prénom"
                autoFocus
                onChange={handlChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                error={nomHelper.length !== 0}
                helperText={nomHelper}
                fullWidth
                id="nom"
                label="Nom"
                name="nom"
                onChange={handlChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={handlChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={addressHelper.length !== 0}
                helperText={addressHelper}
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                onChange={handlChange}
              />
            </Grid>
            <div style={{ width: '100%', margin: '2%', border: '1px solid silver', padding:'2%'}}>
            <Grid item xs={12}>
                <Typography style={{marginBottom: '2%', color: 'gray'}}>Permis catégorie A ou B (Recto Verso PDF) *</Typography>
                <input type='file' name='permis' />
            </Grid>
            </div>
            <div style={{ width: '100%', margin: '2%', border: '1px solid silver', padding:'2%'}}>
            <Grid item xs={12}>
                <Typography style={{marginBottom: '2%', color: 'gray'}}>Cart CINE (Recto Verso PDF) *</Typography>
                <input type='file' name='cine' />
            </Grid>
            </div>
            <Grid item xs={12}>
              <TextField
                error={passwordHelper.length !== 0}
                helperText={passwordHelper}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Devenir livreur
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </Paper>
    )
}

export default Livreur
