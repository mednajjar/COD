import React from 'react';
import {Typography, Grid, TextField} from '@material-ui/core';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Compte details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
          required id="email" 
          label="Email" 
          fullWidth 
          autoComplete="email" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="tel"
            label="Tel"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField 
          required 
          id="password" 
          label="Mot de pass" 
          fullWidth 
           />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="repassword"
            label="Mot de pass"
            helperText="Répeter le mot de pass"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}