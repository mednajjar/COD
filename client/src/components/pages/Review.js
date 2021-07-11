import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';



const addresses = [
  { name: 'Prénom', detail: 'Mohammed' },
  { name: 'Nom', detail: 'Najjar' },
  { name: 'Address', detail: 'Qu salam rue x n0X' },
  { name: 'Ville', detail: 'Youssoufia' },
  { name: 'Code postal', detail: '46300' },
  { name: 'Paye', detail: 'Maroc' },
];
const payments = [
  { name: 'Email', detail: 'simo@gmail.com' },
  { name: 'Tel', detail: '0606556765' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Les informations
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Vendeur details
          </Typography>
          {addresses.map((res, i) => (
              <div key={res.i} style={{display: 'flex', flexDirection: 'row'}}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{res.name}</Typography>
                </Grid>
                <Grid item xs={6} style={{color: 'gray'}}>
                  <Typography gutterBottom>{res.detail}</Typography>
                </Grid>
              </div>
            ))}
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Compte details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom style={{color: 'gray'}}>{payment.detail} </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}