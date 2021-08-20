import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { cashondelivery } from '../../assets';
import { makeStyles } from '@material-ui/core';
import { facebook, twitter, linkedin, pinterest } from '../../assets';
import { Link } from 'react-router-dom';

const styles = makeStyles((theme) => ({
    newsletter: {
        width: '90%',
        margin: '1% auto',
        borderRadius: '4px',
        padding: '1%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))
const Footer = () => {
    const classes = styles();
    return (
        <React.Fragment>
            <Grid className={classes.newsletter}>
                <Grid>
                    <img src={cashondelivery} alt="" />
                </Grid>
                <Grid>
                    <Typography variant="h6" className="mb-1">RCEVOIR TOUT LES NOUVEAUTES !</Typography>
                    <form className="col-12 d-flex flex-row justify-content-between">

                        <TextField
                            label="Newsletter"
                            onChange=""
                            type="email"
                        />
                        <button className="btn btn-secondary p-2 ms-4 fs-5">SUBSCRIBE</button>

                    </form>
                </Grid>
                <Grid>
                    <Typography variant="h6" className="mb-2">RETROUVEZ-NOUS SUR</Typography>
                    <Grid className="col-12 d-flex flex-row justify-content-between">
                        <Link to={{ pathname: "https://www.facebook.com" }} target="_blank"><img src={facebook} alt={facebook} style={{ width: '65%' }} /></Link>
                        <Link to={{ pathname: "https://wwww.twitter.com" }} target="_blank"><img src={twitter} alt={twitter} style={{ width: '65%' }} /></Link>
                        <Link to={{ pathname: "https://www.linkedin.com" }} target="_blank"><img src={linkedin} alt={linkedin} style={{ width: '65%' }} /></Link>
                        <Link to={{ pathname: "https://www.pinterest.com" }} target="_blank"><img src={pinterest} alt={pinterest} style={{ width: '65%' }} /></Link>
                    </Grid>
                </Grid>
            </Grid >
            <Grid className="text-center p-2 text-white">
                <Typography>Copyright 2021 All Right Reserved</Typography>
            </Grid>
        </React.Fragment>
    )
}

export default Footer
