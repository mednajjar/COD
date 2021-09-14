import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';


export default function AddressForm() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [address, setAddress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

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
        setPrenom(e.target.value)
        valid = prenom.length > 1;
        !valid ? setPrenomHelper("Doit contenir au mois 3 lettres!") : setPrenomHelper("")
        break;
      case "nom":
        setNom(e.target.value)
        valid = nom.length > 1;
        !valid ? setNomHelper("Doit contenir au mois 3 lettres!") : setNomHelper("")
        break;
      case "ville":
        setVille(e.target.value)
        valid = ville.length > 1;
        !valid ? setVilleHelper("Ville obligatoire") : setVilleHelper("")
        break;
      case "address":
        setAddress(e.target.value)
        valid = address.length > 4;
        !valid ? setAddressHelper("Address obligatoire") : setAddressHelper("")
        break;
      case "codePostal":
        setCodePostal(e.target.value)
        valid = codePostal.length > 3;
        !valid ? setCodePostalHelper("Code postal obligatoire") : setCodePostalHelper("")
        break;
      case "email":
        setEmail(e.target.value)
        valid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
        !valid ? setEmailHelper("Saisi un email valid!") : setEmailHelper("")
        break;
      case "tel":
        setTel(e.target.value)
        valid = /^(\+\d{1,3}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(e.target.value);
        !valid ? setTelHelper("Saisi un numero valid!") : setTelHelper("")
        break;
      case "password":
        setPassword(e.target.value)
        valid = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(e.target.value);
        !valid ? setPasswordHelper("mot de pass doit contenir au moins 6 lettre et 1 charactère @$!%*#?& ") : setPasswordHelper("")
        break;
      default:
        break;
    }
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vendeur details
      </Typography>
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
            label="Mot de pass"
            fullWidth
            autoComplete="tel"
            onChange={handlChange}
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}