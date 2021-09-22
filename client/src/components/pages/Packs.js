import React from 'react';
import useStyles from './PackStyles';
import { Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Typography, Container, Paper } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['50 produits limit', 'Support 7/7', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '500 produits limit',
      'Support 24/24',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      'Insertion des produits illimité',
      'Support 24/24',
      'Phone & email support',
    ],
    buttonText: 'Get this pack',
    buttonVariant: 'outlined',
  },
];

const Packs = () => {
  const classes = useStyles();
  const history = useHistory();
  const submit = (x) => {

    x === 'Sign up for free' ? history.push("/vendeurDashboard/myStore") : history.push("/checkout")

  }
  return (
    <Paper className={classes.paperPack}>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price} MAD
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={() => submit(tier.buttonText)}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Paper>
  )
}

export default Packs
