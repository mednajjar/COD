import React from 'react'
import {Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container} from '@material-ui/core';
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
    return (
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
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Address"
                label="Address"
                name="address"
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
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
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
    )
}

export default Livreur
