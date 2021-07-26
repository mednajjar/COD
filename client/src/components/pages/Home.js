import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import SideBar from '../layouts/SideBar';
import Products from '../layouts/Products';
// import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  content: {
    width: '80%',
    margin: '1% auto',
    padding: '0.1%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
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
  }
 
}));






const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
              {/* <SideBar />
        <Paper className={classes.root} variant="outlined" square>
            <Products />
        </Paper> */}
        
        <Grid>
            <Grid container style={{flexWrap: 'wrap-reverse'}}>
              <Grid item xs={12} sm={12} md={4} lg={3}>
              <SideBar />
              </Grid>

              <Grid item xs sm style={{ marginBottom: '2%' }}>
                <Card>
                <Products />               
                </Card>
              </Grid>
            </Grid>
          </Grid>
                </div>
    )
}

export default Home
