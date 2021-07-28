import React from 'react'
import {Grid, Typography, TextField} from '@material-ui/core';

const Form = () => {
    return (
        <Grid item xs={12} sm={6} md={5} className="p-5 m-2">
      <Typography variant="h6" gutterBottom className="mb-3">
        Details
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
            id="tel"
            name="tel"
            label="Tel"
            fullWidth
            autoComplete="Tel"
          />
        </Grid>
      </Grid>
    </Grid>
    )
}

export default Form
