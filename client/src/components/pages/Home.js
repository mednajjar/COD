import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import SideBar from '../layouts/SideBar';
import Banner from '../layouts/Banner';
// import Products from '../layouts/Products';
import HeaderCarousal from '../layouts/Carousal';
import ProductSlide from '../layouts/ProductSlide';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '80%',
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
  root: {
    width: '66vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    
    
    
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
  carousal:{
    height: 'auto',
  },
  slide:{
    width: '80%',
    margin: '0 auto 1%',
    padding: '1%',
    [theme.breakpoints.down(1280)]: {
      width: '100%', 
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%', 
    },
  }
  
}));






const Home = () => {
  const classes = useStyles();
  
  return (
    <>
        <div className={classes.content}>
            <Grid container>
              <Grid item xs={12} sm={12} md={3} lg={2}>
                <SideBar />
              </Grid>

              <Grid item xs sm lg style={{ marginLeft: '1%', marginRight: '1%' }}>
                <Paper elevation={0} className={classes.carousal}>
                  <Grid lg={9} style={{margin: 'auto'}}>
                      <HeaderCarousal />       
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={2}  >
                <Banner  />
              </Grid>
            </Grid>
        </div>
            <Paper className={classes.slide}>
                <Typography variant="h6">Le plus vendu</Typography>
            </Paper>
            <Paper className={classes.slide}>
                <ProductSlide /> 
            </Paper>
      </>
    )
}

export default Home
