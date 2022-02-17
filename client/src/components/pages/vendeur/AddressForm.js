import React, { useState, useEffect } from 'react';
import { makeStyles, Grid, Typography, TextField, Button, Box, Fade,  CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { registerVendeur } from '../../../redux/slices/vendeurSlice';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  btnInpt: {
    width: '100%',
    marginTop: theme.spacing(3),
  }
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddressForm() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { respond, registerError } = useSelector(state => state.vendeur);
  const { isAuthenticated, valid } = useSelector(state => state.authentification);
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    ville: "",
    address: "",
    codePostal: "",
    email: "",
    password: "",
    tel: ""
  })

  const [prenomHelper, setPrenomHelper] = useState("");
  const [nomHelper, setNomHelper] = useState("");
  const [addressHelper, setAddressHelper] = useState("");
  const [villeHelper, setVilleHelper] = useState("");
  const [codePostalHelper, setCodePostalHelper] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [telHelper, setTelHelper] = useState("");
  const [passwordHelper, setPasswordHelper] = useState("");

  const handlChange = e => {
    let valid;
    switch (e.target.id) {
      case "prenom":
        setFormData({ ...formData, prenom: e.target.value })
        valid = formData.prenom.length > 1;
        !valid ? setPrenomHelper("Doit contenir au mois 3 lettres!") : setPrenomHelper("")
        break;
      case "nom":
        setFormData({ ...formData, nom: e.target.value })
        valid = formData.nom.length > 1;
        !valid ? setNomHelper("Doit contenir au mois 3 lettres!") : setNomHelper("")
        break;
      case "ville":
        setFormData({ ...formData, ville: e.target.value })
        valid = formData.ville.length > 1;
        !valid ? setVilleHelper("Ville obligatoire") : setVilleHelper("")
        break;
      case "address":
        setFormData({ ...formData, address: e.target.value })
        valid = formData.address.length > 4;
        !valid ? setAddressHelper("Address obligatoire") : setAddressHelper("")
        break;
      case "codePostal":
        setFormData({ ...formData, codePostal: e.target.value })
        valid = formData.codePostal.length > 3;
        !valid ? setCodePostalHelper("Code postal obligatoire") : setCodePostalHelper("")
        break;
      case "email":
        setFormData({ ...formData, email: e.target.value })
        valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
        !valid ? setEmailHelper("Saisi un email valid!") : setEmailHelper("")
        break;
      case "tel":
        setFormData({ ...formData, tel: e.target.value })
        valid = /^(\+\d{1,3}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(e.target.value);
        !valid ? setTelHelper("Saisi un numero valid!") : setTelHelper("")
        break;
      case "password":
        setFormData({ ...formData, password: e.target.value })
        valid = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(e.target.value);
        !valid ? setPasswordHelper("mot de pass doit contenir au moins 6 lettre et 1 charactère @$!%*#?& ") : setPasswordHelper("")
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerVendeur(formData))
    setLoading(true)
    
  
  }

  useEffect(()=>{
    (isAuthenticated && valid === false) && history.push('/validation')
  }, [])

  respond.length > 0 && console.log("respond", respond)
  registerError.length > 0 && console.log("error", registerError)

  return (
    <React.Fragment>
      <Grid style={{textAlign: 'center'}}>
      {
        <Box sx={{ height: 40 }}>
        {
        loading ?  (<CircularProgress />) : respond.length > 0 &&  <Typography color='secondary'>{respond}</Typography> 
        }
      </Box>
      }
     
      {registerError.length > 0 && <Typography color='secondary'>{registerError}</Typography>}
      </Grid>
      <Typography variant="h6" gutterBottom>
        Vendeur details
      </Typography>
      <Grid component="form" validate onSubmit={handleSubmit} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={prenomHelper.length !== 0}
            helperText={prenomHelper}
            id="prenom"
            name="prenom"
            label="Prénom"
            fullWidth
            autoComplete="given-name"
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
            autoComplete="family-name"
            onChange={handlChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={addressHelper.length !== 0}
            helperText={addressHelper}
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handlChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={villeHelper.length !== 0}
            helperText={villeHelper}
            id="ville"
            name="ville"
            label="Ville"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handlChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={codePostalHelper.length !== 0}
            helperText={codePostalHelper}
            id="codePostal"
            name="codePostal"
            label="Code postal"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handlChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={emailHelper.length !== 0}
            helperText={emailHelper}
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            onChange={handlChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={telHelper.length !== 0}
            helperText={telHelper}
            id="tel"
            name="tel"
            label="Tel"
            fullWidth
            autoComplete="tel"
            onChange={handlChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={passwordHelper.length !== 0}
            helperText={passwordHelper}
            id="password"
            name="password"
            type="password"
            label="Mot de pass"
            fullWidth
            autoComplete="tel"
            onChange={handlChange}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit" className={classes.btnInpt}>Confirmer</Button>
      </Grid>
    </React.Fragment>
  );
}