import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
    blocImage: {
        width: '100%',
    },
    allProduct:{
        padding: '1%',
        marginBottom: '1%',
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%',
       
    },
    singleProduct:{
        margin: '1%',
        '&:hover':{
            boxShadow: '0px 0px 6px -1px #000000',
        }
    },
    linkStyle:{
        textDecoration: 'none',
        color: 'black'
    },
    blocInfo:{
        padding: '2%',
    }
}))

const BlocProduct = () => {
    const classes = styles();
    return (
        <React.Fragment>
            <Grid >
                <Paper className="p-3 mb-2 d-flex flex-row align-items-center justify-content-between cursor-pointer">
                    <Typography variant="h6">Le plus vendu</Typography>
                    <Link to="!#" role="button" className="text-decoration-none">Voir Plus</Link>
                </Paper>
                <Paper className={classes.allProduct}>
                    <Grid className={classes.singleProduct}>
                        <Link to="!#" className={classes.linkStyle}>
                            <Grid>
                                <img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" alt="" className={classes.blocImage} />
                                <Grid className={classes.blocInfo}>
                                    <Typography>Title</Typography>
                                    <Typography>Price</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid className={classes.singleProduct}>
                        <Link to="!#" className={classes.linkStyle}>
                            <Grid>
                                <img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" alt="" className={classes.blocImage} />
                                <Grid className={classes.blocInfo}>
                                    <Typography>Title</Typography>
                                    <Typography>Price</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid className={classes.singleProduct}>
                        <Link to="!#" className={classes.linkStyle}>
                            <Grid>
                                <img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" alt="" className={classes.blocImage} />
                                <Grid className={classes.blocInfo}>
                                    <Typography>Title</Typography>
                                    <Typography>Price</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid className={classes.singleProduct}>
                        <Link to="!#" className={classes.linkStyle}>
                            <Grid>
                                <img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" alt="" className={classes.blocImage} />
                                <Grid className={classes.blocInfo}>
                                    <Typography>Title</Typography>
                                    <Typography>Price</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid className={classes.singleProduct}>
                        <Link to="!#" className={classes.linkStyle}>
                            <Grid>
                                <img src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg" alt="" className={classes.blocImage} />
                                <Grid className={classes.blocInfo}>
                                    <Typography>Title</Typography>
                                    <Typography>Price</Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default BlocProduct
