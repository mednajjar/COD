import React,{useState, useEffect} from 'react';
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

    const [data, setData] = useState({
      prenom:"",
      nom:"",
      address:"",
      email:"",
      password:""
    })

    const [prenomHelper, setPrenomHelper] = useState("");
    const [nomHelper, setNomHelper] = useState("");
    const [addressHelper, setAddressHelper] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [passwordHelper, setPasswordHelper] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [file, setFile] = useState('')
    const [files, setFiles] = useState([])

    const fileOnChange = (e) => {
      if (e.target.files) {
        const fileArray = URL.createObjectURL(e.target.files[0])
        setFile(fileArray)
      }
    }
  
    const filesOnChange = (e) => {
      if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
        setFiles(filesArray)
      }
    }

    const onchange =(e)=>{
      !fileOnChange(e) ? setError1("Insérer une image!") : setError1("")
      !filesOnChange(e) ? setError2("Insérer une image!") : setError2("")
    }

    useEffect(()=>{
      file && setError1("");
    },[file])
    
    useEffect(()=>{
      files && setError2("");
    },[files])

    const handlChange = e => {
      let valid;
      switch (e.target.id) {
        case "prenom":
          setData({...data, prenom: e.target.value})
          valid = data.prenom.toString().length > 1;
          !valid ? setPrenomHelper("Doit contenir au mois 3 lettres!") : setPrenomHelper("")
          break;
        case "nom":
          setData({...data, nom: e.target.value})
          valid = data.nom.toString().length > 1;
          !valid ? setNomHelper("Doit contenir au mois 3 lettres!") : setNomHelper("")
          break;
        case "address":
          setData({...data, address: e.target.value})
          valid = data.address.toString().length > 4;
          !valid ? setAddressHelper("Address obligatoire") : setAddressHelper("")
          break;
        case "email":
          setData({...data, email: e.target.value})
          valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
          !valid ? setEmailHelper("Saisi un email valid!") : setEmailHelper("")
          break;
        case "password":
          setData({...data, password: e.target.value})
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
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="prenom"
                error={prenomHelper.length !== 0}
                helperText={prenomHelper}
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
                required
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={handlChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={addressHelper.length !== 0}
                helperText={addressHelper}
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
                required
                error={passwordHelper.length !== 0}
                helperText={passwordHelper}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
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
            // onClick={handlChange}
          >
            Devenir livreur
          </Button>
        </form>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </Paper>
    )
}

export default Livreur
