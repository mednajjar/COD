import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import ProductSlide from '../layouts/slides/ProductSlide';
import ProductSlide2 from '../layouts/slides/ProductSlide2';
import HeaderHero from '../layouts/HeaderHero';
import { bannerFull } from '../../assets';
import BlocProduct from '../layouts/BlocProduct';
import Footer from '../layouts/Footer';
const useStyles = makeStyles((theme) => ({
  content: {
    width: '80%',
    height: 'auto',
    margin: '1% auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  imageList: {
    width: '100%',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',

    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  itemBar: {
    height: '12vh',
    padding: '1%',
    [theme.breakpoints.down('sm')]: {
      height: '16vh',
    },
  },
  carousal: {
    height: '100%',
  },
  slide: {
    width: '80%',
    margin: '0 auto 1%',
    // padding: '1%',
    background: 'yello',
    [theme.breakpoints.down(1280)]: {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  footer: {
    width: '80%',
    margin: '0 auto',
    backgroundColor: 'gray',
    paddingTop: '.5%'
  }

}));






const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.content}>
        <HeaderHero />
      </Grid>
      <Grid className={classes.slide}>
        <ProductSlide />
      </Grid>
      <Grid className={classes.slide}>
        <ProductSlide2 />
      </Grid>
      <Paper className={classes.slide}>
        <Grid style={{ width: '100%', padding: '.5%' }}>
          <img src={bannerFull} alt="img" style={{ width: '100%', height: '100%' }} />
        </Grid>
      </Paper>
      <Grid className={classes.slide}>
        <BlocProduct />
      </Grid>
      <Paper className={classes.footer}>
        <Footer />
      </Paper>
    </>
  )
}

export default Home
