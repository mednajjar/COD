import React from 'react';
import SideBar from './sideBars/SideBar';
import HeaderCarousal from './slides/Carousal';
import Banner from './sideBars/Banner';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  carousal: {
    width: '100%',
    height: '100%',
  },
}));


const HeaderHero = () => {
  const classes = useStyles();
  return (
    <Grid container style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }}>
      <Grid item xs={12} sm={12} md={3} lg={2}>
        <SideBar />
      </Grid>

      <Grid item xs sm lg style={{ marginLeft: '1%', marginRight: '1%', height: '100%' }}>
        <Paper elevation={0} className={classes.carousal}>
          <Grid lg={9} style={{ margin: 'auto' }}>
            <HeaderCarousal />
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={12} md={3} lg={2}  >
        <Banner />
      </Grid>
    </Grid>
  )
}

export default HeaderHero
