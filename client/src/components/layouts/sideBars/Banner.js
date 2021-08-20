import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from '../styles'
import {banner} from '../../../assets';

const Banner = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paperSideBar2} variant="outlined" square>
            <img src={banner} alt="" style={{width: '100%', height: '100%', margin: '0 auto'}}/>
        </Paper>
    )
}

export default Banner
