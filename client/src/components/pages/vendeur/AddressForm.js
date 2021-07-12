import React from 'react';
import {Grid, Typography, TextField} from '@material-ui/core';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vendeur details
      </Typography>
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
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ville"
            name="ville"
            label="Ville"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Code postal"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="paye"
            name="paye"
            label="Paye"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}